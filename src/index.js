import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./Components/Home/Home"
import PastConversation from './Components/History/PastConversation'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
   { 
    path: '/',
    element: <App />,
    children: [
      
      {
        path:"PastConversation",
        element: <PastConversation />
      },
      {
        path:"/",
        element: <Home />
      }
    ]

   }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
