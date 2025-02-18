import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Check the correct path

const store = configureStore({
  reducer: {
    auth: authReducer, // Ensure authReducer is correctly imported
  },
});

export default store;
