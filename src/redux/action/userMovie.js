import { reduxUser } from "../../utils/auth/get_user"
import { setUser, setUsername } from "../reducers/user/userSlice"

const userMovie = ( ) => async(dispatch) => { 
    return reduxUser().then((result) => { 
         dispatch(setUser(result.data.data))
         console.log(result)
         
     }).catch((err)=> {
         
     }) 
 }
 export default userMovie;