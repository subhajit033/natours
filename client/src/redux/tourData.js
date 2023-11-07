import { createSlice } from '@reduxjs/toolkit';

const tourData = createSlice({
  name: 'tourData',
  initialState: {
    data: '',
  },
  reducers: {
    addTourData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {addTourData} = tourData.actions;
export default tourData.reducer