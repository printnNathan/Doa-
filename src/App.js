import React from 'react';
import { View, StyleSheet } from 'react'
import Navbar from '../src/components/NavBar/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/components/Footer/footer';
import Anuncios from './components/Anuncios/Anuncios';
import { BrowserRouter as Router, Route, Switch, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import EscolherCategoria from './Pages/EscolherCategoria/EscolherCategoria';
import CadastrarUsuario from "./Pages/CadastrarUsuario"

const router = createBrowserRouter([
  {
    path: "/",
    element: <CadastrarUsuario />,
  },
  {
    path: "/",
    element: <EscolherCategoria />,
  },
  {
    path: "contact",
    element: <Home />,
  }
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
