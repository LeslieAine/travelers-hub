import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
  dispatched: false,
};
const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error fetching missions data: ${res.message}`);
      }
      return res.json();
    });
  return response;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setReserved(state, { payload }) {
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === payload) return { ...mission, reserved: true };
          return mission;
        }),
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => ({ ...state, status: 'pending' }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload.map((item) => (
          {
            mission_name: item.mission_name,
            mission_id: item.mission_id,
            description: item.description,
          }
        )),
        status: 'succeeded',
      }));
  },
});

export const missionsState = (state) => state.missions;
export const { setReserved } = missionsSlice.actions;
export default missionsSlice.reducer;
