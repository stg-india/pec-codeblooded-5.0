import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import "./app.scss"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


function App() {
const queryClient = new QueryClient();

const Layout = ()=>{
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        {/* <Navbar/> */}
        <Outlet/>
        {/* <Footer/> */}
      </QueryClientProvider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  }, 
]);


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
