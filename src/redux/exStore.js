import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import { thunk } from 'redux-thunk'

export const exStore = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware({serializableCheck:false})
})