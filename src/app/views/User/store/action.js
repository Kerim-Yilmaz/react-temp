import axios from "axios"
import { GET_USERS } from "./actionTypes"




const userData= async ()=>{

    return await axios.get(`${process.env.REACT_APP_API_BASENAME}/user/list`,{
        headers:{Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImJhcmlzIiwibmFtZSI6IkJhcsSxxZ8gRGVtaXIiLCJsZXZlbCI6IkFETUlOIiwiaWF0IjoxNjMzNTI0OTcyfQ.TDsbjxaOhNDFyKfFVDvAoS0spLliWhLFHKsbpY_yDDU`}
    }).then(res=>res.data)

}


const getUsers=()=>{
    return dispatch=>{
        try{
            return dispatch({type:GET_USERS,payload:userData()})
        }catch(e){
            console.log(e)
        }

    }
}

export {getUsers}