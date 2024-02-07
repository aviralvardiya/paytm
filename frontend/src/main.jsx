import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './components/SignUp.jsx';
import Dashboard from './components/Dashboard.jsx';
import Send from './components/Send.jsx';
import SignIn from './components/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/send",
    element: <Send/>,
  },
  {
    path: "*",
    element: <div>Wrong path</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
