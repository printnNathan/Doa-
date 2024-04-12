import React from 'react';
import { View, StyleSheet } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Anuncios from './components/Anuncios/Anuncios';
import Login from './Pages/Login/Login'
import Home from './Pages/PaginaHome/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
