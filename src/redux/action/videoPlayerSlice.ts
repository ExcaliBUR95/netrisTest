import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Event {
  timestamp: number;
  endTime: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface VideoState {
  events: Event[];
  isLoading: boolean;
}

const initialState: VideoState = {
  events: [],
  isLoading: false
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<Event[]>) => {
      state.events = action.payload;
      state.isLoading = false;  
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload; 
    },
  },
});

export const { setEvents } = videoSlice.actions;
export default videoSlice.reducer;
