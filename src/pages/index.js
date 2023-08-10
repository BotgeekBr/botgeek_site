import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import Inicio from "./inicio"
import Header from "../components/header";
import Solucoes from "./solucoes"
import Sobre from "./sobre"
import Contato from "./contato"
import Clientes from "./clientes";
import Footer from '../components/footer'

const BoxInicio = styled(Box)(({ theme }) => ({}));

function PageHome() {
  
  return (
    <BoxInicio>
      <Header  />
      <section className="section section-1" id="inicio">
        <Inicio />
      </section>
      <section className="section section-2" id="sobre">
        <Sobre />
      </section>
      <section className="section section-3" id="solucoes">
        <Solucoes />
      </section>
      <section className="section section-4" id="clientes">
        <Clientes />
      </section>
      <section className="section section-5" id="contato">
        <Contato />
      </section>
      <section className="section section-6" id="footer">
        <Footer />
      </section>
    </BoxInicio>
  );
}

export default PageHome;
