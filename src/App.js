import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login/Login';
import HomePageOFC from './Pages/HomePageOFC/HomePageOFC';
import RequisicaoDeServico from './Pages/RequisicaoDeServico/RequisicaoDeServico';
import CadastrarUsuario from './Pages/CadastrarUsuario/CadastrarUsuario';
import QuemSomos from './Pages/QuemSomos/QuemSomos';
import EscolherCategoria from './Pages/EscolherCategoria/EscolherCategoria';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageOFC />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Meus anuncios",
      element: <MeusAnuncios />,
    },
    {
      path: "/EscolherCategoria",
      element: <EscolherCategoria />,
    },
    {
      path: "/Requisicao",
      element: <RequisicaoDeServico />,
    },
    {
      path: "/QuemSomos",
      element: <QuemSomos />,
    },
    {
      path: "/Perfil",
      element: <CadastrarUsuario />,
    }
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
