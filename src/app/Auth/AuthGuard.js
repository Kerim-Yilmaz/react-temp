import React,{useEffect,useState} from 'react'
import { Redirect,useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
const AuthGuard = ({children})=>{
    const {isAuthenticated,}=useAuth()
    

    const [previousRoute,setPreviousRoute]=useState(null)
    const {pathname} = useLocation();

    let authenticated = isAuthenticated

    useEffect(()=>{
        if(previousRoute!==null)setPreviousRoute(pathname)
    },[pathname,previousRoute])

    if(authenticated)return <>{children}</>
    else{
        return(
            <Redirect
            to={{
                pathname:'/login',
                state:{redirectUrl:previousRoute}
            }}
            />
        )
    }

}

export default AuthGuard