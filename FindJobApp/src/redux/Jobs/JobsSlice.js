import {createSlice} from '@reduxjs/toolkit';

export const JobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    items: [],
    favoriteList: [],
  },
  reducers: {
    loadItems: (state, action) => {
      state.items = action.payload;
    },
    addFavoriteList: (state, action) => {
      if (state.favoriteList.some(item => item.id === action.payload.id)) {
        console.log('error');
      } else {
        state.favoriteList.push(action.payload);
      }
    },
    removeFav: (state, action) => {
      const filtered = state.favoriteList.filter(item => item.id !== action.payload.id);
      state.favoriteList = filtered;
    },
  },
});

export const {loadItems, addFavoriteList, removeFav} = JobsSlice.actions;

export default JobsSlice.reducer;
