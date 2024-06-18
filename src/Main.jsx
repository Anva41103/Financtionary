import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from './HomePage'
import { About } from './About'
import { Login } from './LoginPg'
import { Blog } from "./Blog"
import { BlogP1 } from "./BlogPg1"
import { BlogP2 } from "./BlogPg2"
import { BlogP3 } from "./BlogPg3"
import { BlogP4 } from "./BlogPg4"
import { BlogP5 } from "./BlogPg5"

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children : [
      {
        path:'',
        element: <Home/>
      },
      {
        path:'/Blog',
        element: <Blog/>
      },
      {
        path:'/Home',
        element: <Home/>
      },
      {
        path:'/About',
        element: <About/>
      },
      {
        path:'/Login',
        element: <Login/>
      },
      {
        path:'/BlogP1',
        element: <BlogP1/>
      },
      {
        path:'/BlogP2',
        element: <BlogP2/>
      },
      {
        path:'/BlogP5',
        element: <BlogP5/>
      },
      {
        path:'/BlogP3',
        element: <BlogP3/>
      },
      {
        path:'/BlogP4',
        element: <BlogP4/>
      },
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router}/>
    </>
  </React.StrictMode>,
)
