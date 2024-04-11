import React from 'react';
import { View, StyleSheet } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, createBrowserRouter, RouterProvider } from 'react-router-dom';
import CadastrarUsuario from './components/CadastrarUsuario/CadastrarUsuario';
import Login from './Pages/Login/Login';
import Home from './Pages/PaginaHome/Home';
import { ToastContainer } from 'react-toastify';
import Anuncios from './components/Anuncios/Anuncios';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Anuncios/>,
  },
  {
    path: "/",
    element: <CadastrarUsuario/>,
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
