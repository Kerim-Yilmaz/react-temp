import React, {createContext,useEffect,useReducer} from 'react'
import jwtDecode from 'jwt-decode'
import axios from '../../axios'
import IsLoading from '../generalComponents/IsLoading'

const initalState = {
    isAuthenticated : false,
    isInitialised : false,
    user: null,
}

const isValidToken = (accessToken)=>{
    if(!accessToken){
        console.log('failed access')
        return false
    }
    const decodedToken = jwtDecode(accessToken)
    const currentTime = Date.now()/1000
    return  decodedToken.exp>currentTime
}

const setSession = (accessToken)=>{
    if(accessToken){
        localStorage.setItem('accessToken',accessToken)
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    }else{
        localStorage.removeItem('accesToken')
        delete axios.defaults.headers.common.Authorization
    }
}

const reducer = (state,action)=>{
    switch (action.type){
        case 'INIT':{
            const {isAuthenticated,user}=action.payload
            return {
                ...state,
                isAuthenticated,
                isInitialised:true,
                user,
            }
        }
        case 'LOGIN':{
            const {user}=action.payload
            return{
                ...state,
                isAuthenticated:true,
                user,
            }
        }
        case 'LOGOUT': {
            return{
                ...state,
                isAuthenticated:false,
                user:null
            }
        }
        default :{
            return{...state}
        }
    }
}

const AuthContext = createContext({
    ...initalState,
    method:'JWT',
    login:()=>Promise.resolve(),
    logout:()=>{},
})

export const AuthProvider = ({children})=>{
    const [state,dispatch]=useReducer(reducer,initalState)

    const login = async (data)=>{
        const response = await axios.post(`${process.env.REACT_APP_API_BASENAME}/user/login`,{
            username:data.username,
            password:data.password,
        })
        const {accessToken,user_id,username,level}=response.data
        setSession(accessToken)
        dispatch({
            type:'LOGIN',
            payload:{
                user:{
                    user_id,
                    username,
                    level,
                }
            }
        })
    }

    const logout=()=>{
        setSession(null)
        localStorage.removeItem('accessToken')
        dispatch({type:'LOGOUT'})
    }

    useEffect(()=>{
        (async ()=>{
            try {
                const accessToken = window.localStorage.getItem('accessToken')

                if(accessToken&&isValidToken(accessToken)){
                    setSession(accessToken)
                    dispatch({
                        type:'INIT',
                        payload:{
                            isAuthenticated:true,
                        }
                    })
                }else{
                    dispatch({
                        type:'INIT',
                        payload:{
                            isAuthenticated:false,
                            user:null,
                        }
                    })
                }
                
            } catch (error) {
                dispatch({
                    type:'INIT',
                    payload:{
                        isAuthenticated:false,
                    }
                })
            }
        })()
    },[])
    

    if(!state.isInitialised){
        return <IsLoading/>
    }
    return(
        <AuthContext.Provider
        value={{
            ...state,
            method:'JWT',
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext