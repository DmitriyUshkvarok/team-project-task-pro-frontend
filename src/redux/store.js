import { configureStore } from '@reduxjs/toolkit';
import { persisteAuthReducer } from './auth/authSlice';
import { profileApi } from './profileApi/profileApi';
import { tasksApi } from './tasksApi/tasksApi';
import { helpApi } from './helpApi/helpApi';
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

const store = configureStore({
  reducer: {
    auth: persisteAuthReducer,
    theme: themeReducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [helpApi.reducerPath]: helpApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(profileApi.middleware, tasksApi.middleware, helpApi.middleware),
});

export const persistor = persistStore(store);

export default store;
