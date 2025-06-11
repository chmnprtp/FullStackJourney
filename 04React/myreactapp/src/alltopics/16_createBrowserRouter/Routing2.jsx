import React, { lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Layout from './Layout';
// import Home from '../../pages/Home';
// import About from '../../pages/About';
// import Contact from '../../pages/Contact';
// import Signup from '../../pages/Signup';

const Home = lazy(()=> import("../../pages/Home"));
const About = lazy(()=> import("../../pages/About"));
const Contact = lazy(()=> import("../../pages/Contact"));
const Signup = lazy(()=> import("../../pages/Signup"));
const Layout = lazy(()=> import("../16_createBrowserRouter/Layout"));

let myRoutes = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                // path:"/",
                index:true, // it will follow layout path- when layout render this will display
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/signup",
                element:<Signup/>
            }
        ]
    }
]);

const Routing2 = () => {
  return (
    <div>
        <RouterProvider  router={myRoutes}/>
    </div>
  )
}

export default Routing2