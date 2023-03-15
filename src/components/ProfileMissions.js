import { useSelector } from 'react-redux';
import { missionsState } from '../redux/missions/missionsSlice';
import styles from '../styles/ProfileMissions.module.css';

const ProfileMissions = () => {
  const { missions } = useSelector(missionsState);
  const joinedMissions = missions
    .filter((mission) => mission.reserved);

  if (joinedMissions.length === 0) { return (<p>No joined missions yet</p>); }

  return (
    <ul className={styles['missions-list']}>
      <p className={styles.title}>My Missions</p>
      {joinedMissions
        .map((mission) => (
          <li className={styles.mission} key={mission.mission_id}>
            {mission.mission_name}
          </li>
        ))}
    </ul>
  );
};
export default ProfileMissions;
