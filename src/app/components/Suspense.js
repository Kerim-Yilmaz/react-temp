import React,{Suspense} from 'react'
import { Route } from 'react-router'
import IsLoading from '../generalComponents/IsLoading'


const RoutesSuspense=({children})=>{
    return <Suspense fallback={<IsLoading/>}>{children}</Suspense>
}

export default RoutesSuspense