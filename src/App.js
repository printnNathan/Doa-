import React from 'react';
import { View, StyleSheet } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login/Login';
import Home from './Pages/HomePage/Home';
import EscolherCategoria from './Pages/EscolherCategoria/EscolherCategoria';
import RequisicaoDeServico from './Pages/RequisicaoDeServico/RequisicaoDeServico';



function App() {
  const router = createBrowserRouter([
    {

      path: "/",
      element: <EscolherCategoria />,
    },
    {

      path: "/Home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
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
