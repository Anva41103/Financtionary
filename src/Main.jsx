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
