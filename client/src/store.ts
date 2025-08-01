import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import feedbackReducer from "./slice/feedbackSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    feedback: feedbackReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
