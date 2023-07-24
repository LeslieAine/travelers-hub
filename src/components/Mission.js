import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setReserved } from '../redux/missions/missionsSlice';
import styles from '../styles/Mission.module.css';

const Tag = ({ status }) => (
  <p className={styles[`${status && 'tag-joined'}`]}>
    {`${status ? 'Active Member' : 'NOT A MEMBER'}`}
  </p>
);

const Button = ({ reserved, joinHandler }) => (
  <button
    type="button"
    onClick={joinHandler}
    className={styles[`${reserved && 'action-button-joined'}`]}
  >
    {`${reserved ? 'Leave' : 'Join'} Mission`}
  </button>
);
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
      <div className={styles.status}>
        <Tag status={reserved} />
      </div>
      <div className={styles.action}>
        <Button joinHandler={joinHandler} reserved={reserved} />
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

Tag.propTypes = { status: PropTypes.bool.isRequired };
Button.propTypes = { reserved: PropTypes.bool.isRequired, joinHandler: PropTypes.func.isRequired };

export default Mission;
