import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login/Login';
import EscolherC from './Pages/EscolherCategoria/EscolherCategoria';
import RequisicaoDeServico from './Pages/RequisicaoDeServico/RequisicaoDeServico';
import CadastrarUsuario from './Pages/CadastrarUsuario/CadastrarUsuario';
import Home from './Pages/HomePage/Home';
import HomePageOFC from './Pages/HomePageOFC/HomePageOFC';
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
      path: "/EscolherC",
      element: <EscolherC />,
    },
    {
      path: "/Requisicao",
      element: <RequisicaoDeServico />,
    },
    {
      path: "/Meus Anúncios",
      element: <Home />,
    },
    {
      path: "/HomePageOFC",
      element: <HomePageOFC />,
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
