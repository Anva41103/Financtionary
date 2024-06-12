import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './HomePage'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children : [
      {
        path:'',
        element: <Home/>
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
