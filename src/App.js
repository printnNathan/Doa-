import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login/Login';
import RequisicaoDeServico from './Pages/RequisicaoDeServico/RequisicaoDeServico';
import CadastrarUsuario from './Pages/CadastrarUsuario/CadastrarUsuario';
import EscolherCategoria from './Pages/EscolherCategoria/EscolherCategoria';
import MeusAnuncios from './Pages/MeusAnuncios/MeusAnuncios';
import Perfil from './Pages/CadastrarUsuario/CadastrarUsuario'; 
import CardPerfil from './components/CardPerfil/CardPerfil';

function App() {
  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/CardPerfil",
      element: <CardPerfil/>,
    },
    {
      path: "/Perfil",
      element: <Perfil />,
    },
    {
      path: "/",
      element: <MeusAnuncios />,
    },
    {
      path: "/EscolherCategoria",
      element: <EscolherCategoria />,
    },
    {
      path: "/RequisicaoDeServico",
      element: <RequisicaoDeServico />,
    },
    {
      path: "/CadastrarUsuario",
      element: <CadastrarUsuario />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
