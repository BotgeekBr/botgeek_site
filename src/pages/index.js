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
      <div className="section" id="inicio">
        <Inicio />
      </div>
      <div className="section" id="sobre">
        <Sobre />
      </div>
      <div className="section" id="solucoes">
        <Solucoes />
      </div>
      <div className="section" id="clientes">
        <Clientes />
      </div>
      <div className="section" id="contato">
        <Contato />
      </div>
      <div className="section" id="footer">
        <Footer />
      </div>
    </BoxInicio>
  );
}

export default PageHome;
