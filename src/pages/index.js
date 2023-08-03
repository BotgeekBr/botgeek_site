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
      <Inicio    ></ Inicio>
      <Sobre   ></Sobre>
      <Solucoes ></Solucoes>
      <Clientes ></Clientes>
      <Contato  ></Contato>
    </BoxInicio>
  );
}

export default PageHome;
