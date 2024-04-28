import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login/Login';
import Home from './Pages/HomePage/Home';
import EscolherC from './Pages/EscolherCategoria/EscolherCategoria';
import RequisicaoDeServico from './Pages/RequisicaoDeServico/RequisicaoDeServico';
import CadastrarUsuario from './Pages/CadastrarUsuario/CadastrarUsuario';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <EscolherC />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {

      path: "/Home",
      element: <Home />,
    },
    {
      path: "/Perfil",
      element: <CadastrarUsuario />,
    },
    {
      path: "/Requisicao",
      element: <RequisicaoDeServico />,
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
