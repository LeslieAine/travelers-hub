import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, missionsState } from '../redux/missions/missionsSlice';
import styles from '../styles/Missions.module.css';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const { status, missions } = useSelector(missionsState);

  if (status === 'idle') {
    dispatch(fetchMissions());
  }
  if (status === 'succeeded') {
    return (
      <div className={styles['missions-list']}>
        <div className={styles['missions-list-header']}>
          <p>Mission</p>
          <p>Description</p>
        </div>
        {missions.map((mission) => (
          <Mission
            key={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
          />
        ))}
      </div>
    );
  }

  return (<p>pending...</p>);
};

export default Missions;
