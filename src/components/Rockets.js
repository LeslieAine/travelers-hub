import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets, reserveRocket } from '../redux/rockets/rocketsSlice';
import styles from '../styles/Rockets.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rocketLists } = useSelector((state) => state.rockets);
  const { status } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (status === false) dispatch(fetchRockets());
  }, [dispatch, status]);

  const rockets = rocketLists.map((each) => (
    <article key={each.id} className={styles.article}>
      <img src={each.flickr_images[0]} className={styles.img} alt="rocket" />
      <div>
        <h2 className={styles.title}>{each.name}</h2>
        <p>
          {each.reserved ? <span className={styles.span}>Reserved</span> : ''}
          {each.description}
        </p>
        <button
          type="button"
          className={each.reserved ? styles.unreserve : styles.reserve}
          onClick={() => dispatch(reserveRocket(each.id))}
        >
          {each.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </article>
  ));

  return <>{status && rockets}</>;
};
export default Rockets;
