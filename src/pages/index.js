import React from "react";
import {Box} from "@mui/material"
import { styled } from '@mui/material/styles';
import Inicio from "./inicio"
import Header from "../components/header";

const BoxInicio= styled(Box)(({ theme }) => ({
    
  }));

  

function PageHome() {
  return (
    <BoxInicio >
      <Header></Header>
      <Inicio></Inicio>
      <Inicio></Inicio>
      <Inicio></Inicio>
      <Inicio></Inicio>
      <Inicio></Inicio>
    </BoxInicio>
  );
}

export default PageHome;
