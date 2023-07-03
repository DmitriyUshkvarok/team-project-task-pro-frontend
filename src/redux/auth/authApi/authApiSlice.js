import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { authApi } from '../authApi/authApiOperation';

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
  reducers: {
    clearToken: (state) => {
      state.token = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, action) => {
          state.user.theme = action.payload.theme;
          state.user.email = action.payload.email;
          state.user.name = action.payload.name;
          state.user.id = action.payload.id;
          state.user.boards = action.payload.boards;
          state.user.currentBoard = action.payload.currentBoard;
          state.user.avatarURL = action.payload.avatarURL;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.user.id = action.payload.id;
        state.user.boards = action.payload.boards;
        state.user.currentBoard = action.payload.currentBoard;
        state.user.avatarURL = action.payload.avatarURL;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
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
      .addMatcher(
        authApi.endpoints.refreshCurrentUser.matchPending,
        (state) => {
          state.isRefreshing = true;
        }
      )
      .addMatcher(
        authApi.endpoints.refreshCurrentUser.matchFulfilled,
        (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )
      .addMatcher(
        authApi.endpoints.refreshCurrentUser.matchRejected,
        (state) => {
          state.isRefreshing = false;
        }
      )
      .addMatcher(
        authApi.endpoints.updateTheme.matchFulfilled,
        (state, action) => {
          state.user.theme = action.payload.theme;
          state.token = action.payload.token;
        }
      );
  },
});

const persisteAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const { clearToken } = authSlice.actions;

export default persisteAuthReducer;
