import { GET_USERS_FULFILLED,GET_USERS_REJECTED,GET_USERS_PENDING,GET_USERS_CLEAR } from "./actionTypes"


const initalState ={
    data:[],
    isLoading:true,
    error:{}
}

const usersReducer = (state=initalState , action) =>{

    switch(action.type){

        case GET_USERS_PENDING:
            return{...state,isLoading:true}

        case GET_USERS_FULFILLED:
            return {...state,data:action.payload,isLoading:false}
            
        case GET_USERS_REJECTED:
            return{...state,error:action.payload,isLoading:false}
        
        case GET_USERS_CLEAR:
            return {initalState}
        default:
            return state
    }
}

export default usersReducer