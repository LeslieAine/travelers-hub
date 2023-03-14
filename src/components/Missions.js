import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, missionsState } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(missionsState);

  if (status === 'idle') {
    dispatch(fetchMissions());
  }
  return (
    <div>To be filled with missions</div>
  );
};

export default Missions;
