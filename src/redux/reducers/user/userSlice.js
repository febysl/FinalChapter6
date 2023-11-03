import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : "",
}

//membuat slice redux
const authLoginSlice = createSlice({
    name : "getUser",
    initialState ,
    reducers :{
        setUser: (state, action) => { //atur token
            state.user = action.payload;
          },
    },
})

export const { setUser } = authLoginSlice.actions;


export default authLoginSlice.reducer;