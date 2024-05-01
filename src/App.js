import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login/Login';
import Home from './Pages/HomePage/Home';
import EscolherC from './Pages/EscolherCategoria/EscolherCategoria';
import RequisicaoDeServico from './Pages/RequisicaoDeServico/RequisicaoDeServico';
import CadastrarUsuario from './Pages/CadastrarUsuario/CadastrarUsuario';
import Anuncios from './components/Anuncios/Anuncios';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
