import React from 'react';
import { View, StyleSheet } from 'react'
import Navbar from '../src/components/NavBar/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/components/Footer/footer';
import Anuncios from './components/Anuncios/Anuncios';
import { BrowserRouter as Router, Route, Switch, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login"
import CadastroDeUsuario from './components/CadastroDeUsuario/Cadastro';
import PublicadosPanel from './components/Anuncios/PublicadosPanel';





const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    }, 
    {
      path: "/",
      element: <CadastroDeUsuario/>,
    }, 
    {
      path: "contact",
      element: <Home/>,
    }
]);

function App() {
  return (
    <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
  );
}

export default App;
