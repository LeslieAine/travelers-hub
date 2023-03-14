import PropTypes from 'prop-types';
import styles from '../styles/Mission.module.css';

const Mission = ({ name, description }) => (
  <div className={styles.mission}>
    <div className={styles.name}>
      <p>{name}</p>
    </div>
    <div className={styles.description}>
      <p>{description}</p>
    </div>
  </div>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
