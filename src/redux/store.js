import { configureStore } from '@reduxjs/toolkit';
import { persisteAuthReducer } from './auth/authSlice';
import { profileApi } from './profileApi/profileApi';
import { tasksApi } from './tasksApi/tasksApi';
import { helpApi } from './helpApi/helpApi';
import { boardsApi } from './boadrApi/boardApi';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import themeReducer from './theme/themeSlice';
import modalReducer from './modal/modalSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: persisteAuthReducer,
    theme: themeReducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [helpApi.reducerPath]: helpApi.reducer,
    [boardsApi.reducerPath]: boardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      profileApi.middleware,
      tasksApi.middleware,
      helpApi.middleware,
      boardsApi.middleware
    ),
});

export const persistor = persistStore(store);

export default store;
