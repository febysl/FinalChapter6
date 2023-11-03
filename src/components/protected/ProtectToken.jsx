import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectToken ({children}) {

    const navigate = useNavigate()
    const data = useSelector((state)=> state.auth)

    useEffect(()=>{
        if (data.token === undefined){ //memeriksa 
            navigate("/")
        }
    },[])
    return children
}
export default ProtectToken;