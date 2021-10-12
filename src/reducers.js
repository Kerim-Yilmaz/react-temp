import {combineReducers} from 'redux'
import usersReducer from './app/views/User/store/reducer'
import changeState from './app/components/store/action'
export default combineReducers({
    usersReducer,
    changeState,
})