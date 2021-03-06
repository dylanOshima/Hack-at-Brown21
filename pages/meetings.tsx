import Layout from '../components/Layout';
import TopBar from '../components/TopBar/index';
import Video from '../components/Video';
import Checkin from '../components/Checkin';
import SideBar from '../components/DashboardSideBar/index';
import styles from '../styles/meeting.module.scss';

const MeetingPage: React.FC = () => (
  <Layout title="i2 | Meeting">
    <TopBar />
    <SideBar activeItem='Meetings'/>

    <div className={styles.page_wrapper}>
      <div className={`columns ${styles.wrapper}`}>
        <div className={`column ${styles.video_column}`}>
          <Video />
        </div>
        <div className={`column is-narrow`}>
          <Checkin date={new Date()} user={{icon: '', name: 'Jason Michaels'}} />
          <Checkin date={new Date()} user={{icon: '', name: 'Jason Michaels'}} />
          <Checkin date={new Date()} user={{icon: '', name: 'Jason Michaels'}} />
        </div>
      </div>
    </div>
  </Layout>
);

export default MeetingPage;
