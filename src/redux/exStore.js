import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

export const exStore = configureStore({
  reducer: {
    user: userReducer
  },
})