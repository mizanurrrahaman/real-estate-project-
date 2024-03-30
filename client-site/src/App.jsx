import { useState } from 'react'
import HomePage from './route/homepage/HomePage'
//import Navbar from './components/navbar/Navbar'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//import Navbar from './components/navbar/Navbar';
import ListPage from './components/listpage/ListPage'
import Layout from './route/layout/layout';
import SinglePage from './route/singlepage/SinglePage';
import ProfilePage from './route/profilePage/ProfilePage';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
          {
            path:"/:id",
            element: <SinglePage/>
          },
          {
            path: "/profile",
            element: <ProfilePage/>
          }
      ]
    }
   
  ]);


  return (
  // <div className='layout'>
  //   <div className='navbar'>
  //     <Navbar/>
  //   </div>
  //   <div className='content'>
  //     <HomePage/>
  //   </div>
  // </div>
  <RouterProvider router={router} />
  );
}

export default App

 {/*
    
  const router = createBrowserRouter([
    {
      path: "/",
      element: <layout />,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        }

      ]
    },
    
  ])

  
  return (
    <RouterProvider router={router}/>
   
 
  );
  */}
