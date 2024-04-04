import React from 'react';
import { View, StyleSheet } from 'react'
import Navbar from '../src/components/NavBar/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/components/Footer/footer';
import Anuncios from '../src/components/Anuncios/Anuncios';
import { BrowserRouter as Router, Route, Switch, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import EscolherCategoria from './Pages/EscolherCategoria/EscolherCategoria';

const router = createBrowserRouter([
    {
      path: "/",
      element: <EscolherCategoria/>,
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
