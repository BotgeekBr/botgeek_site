import React from "react";
import {Box} from "@mui/material"
import { styled } from '@mui/material/styles';
import Inicio from "./inicio"
import Header from "../components/header";
import Solucoes from "./solucoes"
import Sobre from "./sobre"
import Contato from "./contato"

const BoxInicio= styled(Box)(({ theme }) => ({
    
  }));

  

function PageHome() {
  return (
    <BoxInicio >
      <Header></Header>
      <Inicio></Inicio>
      <Sobre></Sobre>
      <Solucoes></Solucoes>
  
      <Contato></Contato>
    </BoxInicio>
  );
}

export default PageHome;
