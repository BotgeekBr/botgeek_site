import React from "react";
import {Box} from "@mui/material"
import { alpha,styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import backgroundImagePage from "../../assets/technology-background-abstract-digital-technology-network-background-illustration-futuristic-point-wave.jpg"

const BoxInicio= styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100vh",
    background: "white",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
   
  }));
  



const buttons = [
  <Button key="three" sx={{mb: 1,background: "none", border: `1px solid ${alpha( "#0D120B", 0.4)}`, backgroundColor: "none" , borderColor: "none", color: "white", fontWeight: 700}}>01</Button>,
  <Button key="three" sx={{mb: 1,background: "none", border: `1px solid ${alpha( "#0D120B", 0.4)}`, backgroundColor: "none" , borderColor: "none", color: "white", fontWeight: 700}}>02</Button>,
  <Button key="three" sx={{mb: 1,background: "none", border: `1px solid ${alpha( "#0D120B", 0.4)}`, backgroundColor: "none" , borderColor: "none", color: "white", fontWeight: 700}}>03</Button>,
  <Button key="three" sx={{mb: 1,background: "none", border: `1px solid ${alpha( "#0D120B", 0.4)}`, backgroundColor: "none" , borderColor: "none", color: "white", fontWeight: 700}}>04</Button>,
];

  

function Contato() {
  return (
    <div name="" id="contato">
      <BoxInicio >
        <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="outlined"
            sx={{ 
              backgroundColor: alpha( "#0D120B", 0.6),
              padding: 1,
              backdropFilter: "blur(10px)",
              borderRadius: 3
          }}
          >
            {buttons}
          </ButtonGroup>  
      </BoxInicio>
    </div>
  );
}

export default Contato;



