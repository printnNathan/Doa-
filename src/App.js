import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import EscolherCategoria from './Pages/EscolherCategoria/EscolherCategoria';
import RequisicaoDeServico from './Pages/RequisicaoDeServico/RequisicaoDeServico';
import CadastrarUsuario from './Pages/CadastrarUsuario/CadastrarUsuario';


function App() {
  const router = createBrowserRouter([
    {
      path: "/Requisicao",
      element: <RequisicaoDeServico />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    
    
    {
      path: "/CadastrarUsuario",
      element: <CadastrarUsuario />,
    },
    {
      path: "/",
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
