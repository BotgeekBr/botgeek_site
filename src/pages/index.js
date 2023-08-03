import React from "react";
import {Box} from "@mui/material"
import { styled } from '@mui/material/styles';
import Inicio from "./inicio"
import Header from "../components/header";
import Solucoes from "./solucoes"
import Sobre from "./sobre"
import Contato from "./contato"
import Clientes from "./clientes";

const BoxInicio= styled(Box)(({ theme }) => ({
    
  }));

  

function PageHome() {
  return (
    <BoxInicio >
      <Header id=""></Header>
      <Inicio   id="inicio"  ></ Inicio>
      <Sobre    id="sobre"></Sobre>
      <Solucoes id="solucoes"></Solucoes>
      <Clientes id="clientes"></Clientes>
      <Contato  id="contato"></Contato>
    </BoxInicio>
  );
}

export default PageHome;
