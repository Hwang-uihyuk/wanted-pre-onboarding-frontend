import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignUp';
import SignUp from './pages/SignIn';
import NotFound from './pages/NotFound';
import Todo from './pages/Todo';



const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
      {
        index:true,
        path:'/',
        element :<Home/>
      },

      {
        path:'/signup',
        element:<SignUp/>
      },

      {
        path:'/signin',
        element:<SignIn/>
      },

      {
        path:'/todo',
        element:<Todo/>
      },


    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
