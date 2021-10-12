import React from 'react'
import { Redirect } from 'react-router'

const redirectRoute= [
    {
        path:'/',
        exact:true,
        component:()=><Redirect to='/home' />,
    },
]

const homeRoutes = [
    {
        path:'/users',
        component:React.lazy(()=>import('./views/User/index')),
        name:'Home'
    }
]

const dashBoardRoutes=[
    {
        path:'/dashboard',
        component:React.lazy(()=>import('./views/Home/Home')),
        name:'Dashboard'
        
    }
]


const routes=[
    ...redirectRoute,
    ...homeRoutes,
    ...dashBoardRoutes,
]

export default routes