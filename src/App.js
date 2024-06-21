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
<<<<<<< HEAD
import AguardandoValidacao from './Pages/AguardandoValidacao/AguardandoValidacao';
import RequisicaoOutros from './Pages/RequisicaoOutros/RequisicaoOutros';
=======
>>>>>>> 37dedc2ae3a27164404f0c5137b28fcde96e8a82

function App() {
  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/CardPerfil",
      element: <CardPerfil />,
    },
    {
<<<<<<< HEAD
      path: "/AguardandoValidacao",
      element: <AguardandoValidacao />,
    },
    {
=======
>>>>>>> 37dedc2ae3a27164404f0c5137b28fcde96e8a82
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
    {
      path: "/RequisicaoOutros",
      element: <RequisicaoOutros />,
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
