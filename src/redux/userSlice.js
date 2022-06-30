import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logedIn: false,
};

export const userSlice = createSlice({
    name: "userSlice ",
    initialState,
    reducers: {
        login: (state, action) => {
            return {
                logedIn: !state.logedIn,
            }
        }
    }
});

export const {
    login
} = userSlice.actions;

export const logedInSelector = state => state.userSlice.logedIn;

export default userSlice.reducer;