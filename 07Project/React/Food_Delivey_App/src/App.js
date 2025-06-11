import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom";

import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error"

//Lazy loading example
const Grocery = lazy(()=>{
    return import("./components/Grocery"); // import is a function which take part of Component to make that component lazyComponent
});

const About = lazy(()=>{
    return import("./components/About")
})

// AppLayout is used to display the header and body for routes
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    );
};

// Defining routes for the app
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path: "/about",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                         <About /> 
                    </Suspense>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                             <Grocery /> 
                        </Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ]

    },
   
]);

// Render the app using ReactDOM.createRoot (for React 18+)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
