import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from "./pages/Home.tsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./pages/ErrorPage.tsx";


const router = createBrowserRouter([
  {
    path: "/auth",
    element: <App />
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="h-full bg-disco">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
