import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import authOperation from './authOperation';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
    id: null,
    theme: '',
    boards: [],
    currentBoard: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authOperation.register.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
        state.user.name = action.payload.name;
        state.user.id = action.payload.id;
        state.user.avatarURL = action.payload.avatarURL;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperation.logIn.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
        state.user.name = action.payload.name;
        state.user.id = action.payload.id;
        state.user.boards = action.payload.boards;
        state.user.currentBoard = action.payload.currentBoard;
        state.user.avatarURL = action.payload.avatarURL;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperation.logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
          avatarURL: null,
          id: null,
          theme: '',
          boards: [],
          currentBoard: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperation.refreshCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(authOperation.refreshCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authOperation.refreshCurrentUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(authOperation.updateTheme.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
        state.token = action.payload.token;
      });
  },
});

export const persisteAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
