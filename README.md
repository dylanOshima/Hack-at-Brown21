# i2 - Imagine Intern 
This is our submission for Hack@Brown 2021 from Kate, Dylan, Naoki and Shin-Ji!

## Inspiration
Members of our team have conducted internships and have co-founded startups. We find that there is usually no shortage of work to be done at a startup and there is also usually no shortage of eager college students willing to do internships. 

However, often times the internship experience is lacklustre with unguided interns feeling like they did not make meaningful contributions and a startup feeling like they had to give them "busy work" because they did not have the time to train or manage the internship. 

Enter i2. An internship training and management platform.

## What it does
When interns join, they are given modules that help teach them the skills that you’ve selected. These include interactive modules that ensure that application is front of mind. A design intern for example is going through the design system module which will give her the chance to: pick colors to make a palette that matches the feeling of the project and is still accessible, practice picking the right typography, and create reusable components that are easy for developers to implement. This all culminates in a final project that brings all these skills together.

Interns are paired with mentors, either provided by the start-up or from i2. This lets interns get personal feedback on the tasks they’ve completed, and answer any questions they might have. It also gives you and interns a better chance to get to know each other. Something especially valuable considering the present circumstances. When an intern finishes a module they can go through the questions they solved with their mentors to understand the nuances of the start-up and any special practices they might have. 

Interns and mentors can video call through the platform for regularly scheduled check-ins.

## How we built it
We began the design process with user research to understand the scope of the problem. We then built high-fidelity prototypes on Figma. The prototypes were then implemented in Next JS as server-side rendered React written in Typescript. The NextJs application is then hosted on the vercel platform.

The video calling functionality was implemented in WebRTC to host one-on-one calls between interns and mentors. An ICE server is first established by storing the WebRTC protocol details and configuration on Google Cloud's firebase. Interns and mentors then use the data from firebase in order to establish the peer-to-peer connection for the video call. 

We attempted to purchase the imagineintern.com domain but were prompted for government ID after the purchase. 

## Challenges we ran into
With such short amount of time and a large number of ideas from all our members, the biggest and most important challenge was to filter down the key components of what to design and implement. We also faced some difficulty in using domain.com even after purchasing a domain as it required government issued identification. 

## Accomplishments that we're proud of
We are super appreciative for this opportunity to work together as designers and developers. Our synergy is probably our proudest achievement!

## What we learned
Individually we learned a few new skills and tricks with some of us using Typescript for the first time and building a functional WebRTC protocol. Members of the team also edited the video for our final deliverable.

## What's next for i2 - Imagine Intern
We believe Imagine Intern serves a real problem for both startups that really need help from interns but do not have the bandwidth to curate entire internship programs and college students who are eager to learn. 
