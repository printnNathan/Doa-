import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login/Login';
import HomePageOFC from './Pages/HomePageOFC/HomePageOFC';
import EscolherC from './Pages/EscolherCategoria/EscolherCategoria';
import RequisicaoDeServico from './Pages/RequisicaoDeServico/RequisicaoDeServico';
import CadastrarUsuario from './Pages/CadastrarUsuario/CadastrarUsuario';
import Anuncios from './components/Anuncios/Anuncios';
import QuemSomos from './Pages/QuemSomos/QuemSomos';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RequisicaoDeServico />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/HomePageOFC",
      element: <HomePageOFC />,
    },
    {
      path: "/EscolherC",
      element: <EscolherC />,
    },
    {
      path: "/Requisicao",
      element: <RequisicaoDeServico />,
    },
    {
      path: "/Anuncios",
      element: <Anuncios />,
    },
    {
      path: "/QuemSomos",
      element: <QuemSomos />,
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
