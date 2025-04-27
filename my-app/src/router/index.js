import { createBrowserRouter, RouterProvider,createHashRouter } from 'react-router-dom'
import Login from '../page/login/index.jsx'
import Home from '../page/home/index.jsx'
import Layout from '../page/layout/index.jsx'
import Mine from '../page/mine/index.jsx'
import NotFound from '../page/notFound/index.jsx'
const router = createHashRouter([
    {
        path:'/',
        Component:Login
    },
    {
        path:'/layout',
        Component:Layout,
        children:[
            {
                // path:'/layout/home',
                index:true,
                Component:Home
            },
            {
                path:'/layout/Mine',
                Component:Mine
            },
        ]
    },
    {
        path:'*',
        Component:NotFound
    }
])
export default router