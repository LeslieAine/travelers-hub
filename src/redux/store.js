import { configureStore } from '@reduxjs/toolkit';
import missionsReducers from './missions/missionsSlice';

export default configureStore({
  reducer: {
    missions: missionsReducers,
  },
});
