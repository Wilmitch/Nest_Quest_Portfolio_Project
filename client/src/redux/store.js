import { configureStore } from '@reduxjs/toolkit'
// import { useReducer } from 'react';
import useReducer from './user/userSlice';

export const store = configureStore({
  reducer: {user: useReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});