import { createSlice } from "@reduxjs/toolkit";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";

const initialState = {
    token : CookieStorage.get(CookieKeys.AuthToken) || undefined, //state untuk nyimpen token diambil dri cookie atau kalau gaada tokennya brati undefined
    isLogin : "",
    user : []
}

//membuat slice redux
const authLoginSlice = createSlice({
    name : "loginAuth",
    initialState ,
    reducers :{
        setToken: (state, action) => { //atur token
            state.token = action.payload;
          },
        setIsLoggedIn: (state, action) => { //atur nilai islogin
            state = { ...state , isLogin : action.payload}
          },
        setUser: (state, action) => { //atur nilai user
            state.user = action.payload;
          },
    }
})

export const { setToken, setIsLoggedIn, setUser } = authLoginSlice.actions;


export default authLoginSlice.reducer;