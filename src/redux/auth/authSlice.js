import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import authOperation from './authOperation';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    id: null,
  },
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
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperation.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperation.logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
          avatarURL: null,
          id: null,
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
      });
  },
});

export const persisteAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
