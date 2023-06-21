import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themeColor: 'dark',
  },
  reducers: {
    toggleTheme: (state) => {
      if (state.themeColor === 'light') {
        state.themeColor = 'violet';
      } else if (state.themeColor === 'violet') {
        state.themeColor = 'dark';
      } else {
        state.themeColor = 'light';
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
