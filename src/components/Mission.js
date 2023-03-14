import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setReserved } from '../redux/missions/missionsSlice';
import styles from '../styles/Mission.module.css';

const Mission = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  const joinHandler = () => {
    dispatch(setReserved(id));
  };
  return (

    <div className={styles.mission}>
      <div className={styles.name}>
        <p>{name}</p>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div className={styles['action-button']}>
        <button
          type="button"
          onClick={joinHandler}
        >
          {`${reserved ? 'Leave' : 'Join'} Mission`}
        </button>
      </div>
    </div>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
