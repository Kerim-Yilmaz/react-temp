import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reduxPromise from 'redux-promise-middleware'
import RootReducer from './reducers/RootReducer'

const initalState ={}

let devTools = (x)=>x

    if(
        process.env.NODE_ENV !== 'production' && 
        process.browser && 
        window.__REDUX_DEVTOOLS_EXTENSION__
        ){
            devTools=window.__REDUX_DEVTOOLS_EXTENSION__()

        }
    
    export const Store = createStore(
        RootReducer,
        initalState,
        compose(applyMiddleware(reduxPromise,thunk),devTools)
    )





