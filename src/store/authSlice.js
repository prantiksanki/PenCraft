import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  status : false, 
  userData : null , 
};

// Creating a slice
const authSlice = createSlice({
  name: 'auth', // Name of the slice
  initialState, // Initial state
  reducers: {  

    login :(state, action) =>
    {
        state.status = true ; 
        state.userData = action.payload.userData ;
    },

    logout : (state) =>
    {
        state.status = false ; 
        state.userData = null ;
    }
    
  },
});

// Exporting actions
export const { login, logout } = authSlice.actions;  																																 //data from store

// Exporting reducer
export default authSlice.reducer;
