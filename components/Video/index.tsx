import * as React from 'react'
import { useEffect, useRef } from 'react';
import './VideoWrapper.module.css'
import { getFirestore } from '../../utils/firebase';

type RangeType = {
  min: number;
  max: number;
} | {
  exact: number;
};

type VideoWrapperType = {
  className?: string;
  width?: number | RangeType;
  height?: number | RangeType;
};

const COLLECTION_ID = "i2";

const configuration = {
  iceServers: [
    {
      urls: [
        'stun:stun1.l.google.com:19302',
        'stun:stun2.l.google.com:19302',
      ],
    },
  ],
  iceCandidatePoolSize: 10,
};

function registerPeerConnectionListeners(peerConnection: RTCPeerConnection): RTCPeerConnection {
  peerConnection.addEventListener('icegatheringstatechange', () => {
    console.log(
        `ICE gathering state changed: ${peerConnection.iceGatheringState}`);
  });

  peerConnection.addEventListener('connectionstatechange', () => {
    console.log(`Connection state change: ${peerConnection.connectionState}`);
  });

  peerConnection.addEventListener('signalingstatechange', () => {
    console.log(`Signaling state change: ${peerConnection.signalingState}`);
  });

  peerConnection.addEventListener('iceconnectionstatechange ', () => {
    console.log(
        `ICE connection state change: ${peerConnection.iceConnectionState}`);
  });
  
  return peerConnection;
}

/*
 * Description of function
 * @param props
 */
const VideoWrapper: React.FC<VideoWrapperType> = ({ className = '' }: VideoWrapperType) => {
  // Variables
  const localStreamRef = useRef<MediaStream | null>(null);
  const remoteStreamRef = useRef<MediaStream | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const roomIdRef = useRef<string | null>('');
  // DOM Elements
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const init = async (): Promise<void> => {
      const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
      if(localVideoRef?.current == null || remoteVideoRef.current == null) 
        return console.error('No local video reference');
      localVideoRef.current.srcObject = stream;
      localStreamRef.current = stream;
      remoteStreamRef.current = new MediaStream();
      remoteVideoRef.current.srcObject = remoteStreamRef.current;
      console.log('Stream:', localVideoRef?.current?.srcObject);
    }
    init();
  }, []);

  const startCall = async (): Promise<void> => {
    const db = getFirestore();
    let roomRef = await db.collection('rooms').doc(COLLECTION_ID);
    const roomSnapshot = await roomRef.get();
    if (roomSnapshot.exists) {
      console.log('room already exists, deleting...');
      await roomRef.delete();
      roomRef = await db.collection('rooms').doc(COLLECTION_ID);
    }
    peerConnectionRef.current = registerPeerConnectionListeners(new RTCPeerConnection(configuration));
    // Initializing local stream
    if (localStreamRef.current == null) return console.error('localStreamRef is null!');
    localStreamRef?.current?.getTracks().forEach(track => {
      if(localStreamRef.current == null) return console.error('localStreamRef is null!');
      peerConnectionRef?.current?.addTrack(track, localStreamRef.current);
    });
    // Code for collecting ICE candidates below
    const callerCandidatesCollection = roomRef.collection('callerCandidates');
    peerConnectionRef.current.addEventListener('icecandidate', event => {
      if (!event.candidate) {
        console.log('Got final candidate!');
        return;
      }
      console.log('Got candidate: ', event.candidate);
      callerCandidatesCollection.add(event.candidate.toJSON());
    });
    // Code for creating a room below
    const offer = await peerConnectionRef.current.createOffer();
    await peerConnectionRef.current.setLocalDescription(offer);
    console.log('Created offer:', offer);

    const roomWithOffer = {
      'offer': {
        type: offer.type,
        sdp: offer.sdp,
      },
    };
    await roomRef.set(roomWithOffer);
    roomIdRef.current = roomRef.id;
    console.log(`New room created with SDP offer. Room ID: ${roomRef.id}`);
    console.log(`Current room is ${roomRef.id} - You are the caller!`);

    peerConnectionRef.current.addEventListener('track', event => {
      console.log('Got remote track:', event.streams[0]);
      event.streams[0].getTracks().forEach(track => {
        if(remoteStreamRef.current == null) return console.error('remoteStreamRef is null!');
        console.log('Add a track to the remoteStream:', track);
        remoteStreamRef.current.addTrack(track);
      });
    });

    // Listening for remote session description below
    roomRef.onSnapshot(async snapshot => {
      const data = snapshot.data();
      if (peerConnectionRef.current != null 
        && !peerConnectionRef.current.currentRemoteDescription
        && data
        && data.answer
      ) {
        console.log('Got remote description: ', data.answer);
        const rtcSessionDescription = new RTCSessionDescription(data.answer);
        await peerConnectionRef.current.setRemoteDescription(rtcSessionDescription);
      }
    });

    // Listen for remote ICE candidates below
    roomRef.collection('calleeCandidates').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(async change => {
        if (peerConnectionRef.current != null && change.type === 'added') {
          const data = change.doc.data();
          console.log(`Got new remote ICE candidate: ${JSON.stringify(data)}`);
          await peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });
  }

  const joinRoom = async (): Promise<void> => {
    const db = getFirestore();
    const roomRef = await db.collection("rooms").doc(COLLECTION_ID);
    const roomSnapshot = await roomRef.get();

    if (roomSnapshot != null && roomSnapshot.exists) {
      // Initializing local stream and peer connection
      console.log('Create PeerConnection with configuration: ', configuration);
      peerConnectionRef.current = registerPeerConnectionListeners(new RTCPeerConnection(configuration));
      if (localStreamRef.current == null) return console.error('localStreamRef is null!');
      localStreamRef.current.getTracks().forEach(track => {
        if(localStreamRef.current == null || peerConnectionRef.current == null) 
          return console.error('localStreamRef or peerConnectionRef is null!'); 
        peerConnectionRef.current.addTrack(track, localStreamRef.current);
      });

      // Code for collecting ICE candidates below
      const calleeCandidatesCollection = roomRef.collection('calleeCandidates');
      peerConnectionRef.current.addEventListener('icecandidate', event => {
        if (!event.candidate) {
          console.log('Got final candidate!');
          return;
        }
        console.log('Got candidate: ', event.candidate);
        calleeCandidatesCollection.add(event.candidate.toJSON());
      });

      peerConnectionRef.current.addEventListener('track', event => {
        console.log('Got remote track:', event.streams[0]);
        event.streams[0].getTracks().forEach(track => {
          console.log('Add a track to the remoteStream:', track);
          if(remoteStreamRef.current == null) return console.error('localStreamRef is null'); 
          remoteStreamRef.current.addTrack(track);
        });
      });

      // Code for creating SDP answer below
      const offer = roomSnapshot.data()?.offer;
      if (offer == null) return console.error('Offer in room was null!');
      await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnectionRef.current.createAnswer();
      console.log('Created answer:', answer);
      await peerConnectionRef.current.setLocalDescription(answer);
      const roomWithAnswer = {
        answer: {
          type: answer.type,
          sdp: answer.sdp,
        },
      };
      await roomRef.update(roomWithAnswer);
      // Code for creating SDP answer above

      // Listening for remote ICE candidates below
      roomRef.collection('callerCandidates').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(async change => {
          if (change.type === 'added') {
            const data = change.doc.data();
            console.log(`Got new remote ICE candidate: ${JSON.stringify(data)}`);
            if(peerConnectionRef.current == null) return console.error('peerConnectionRef is null'); 
            await peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(data));
          }
        });
      });
    }
  }

  return (
    <>
      <div className={`video-wrapper ${className}`}>
        <video ref={localVideoRef} muted autoPlay playsInline/>
        <video ref={remoteVideoRef} autoPlay playsInline/>
      </div>
      <div className='video-controls'>
        <button onClick={startCall}>
          <span>Call</span>
        </button>
        <button onClick={joinRoom}>
          <span>Join</span>
        </button>
      </div>
    </>
  )
};

export default VideoWrapper;
