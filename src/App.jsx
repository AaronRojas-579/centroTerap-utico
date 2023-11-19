import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { InconWP } from "./components/InconWP";
import { Route,Routes } from "react-router-dom";
import { Home } from "../routes/Home";
import {Contacto} from "../routes/Contacto"
import { Nosotros } from "../routes/Nosotros";

export const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
      </Routes>
      <InconWP />
      <Footer />
    </>
  );
};
