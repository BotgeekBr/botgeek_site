import React from "react";
import {Box, Divider, IconButton, Typography} from "@mui/material"
import { alpha,styled, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

//backgroundImagePage
import backgroundImagePageOne from "../../assets/technology-background-abstract-digital-technology-network-background-illustration-futuristic-point-wave.jpg"
import backgroundImagePageTwo from "../../assets/digital-cyberspace-data-network-connections.jpg"
import backgroundImagePageTthee from "../../assets/programming-background-with-person-working-with-codes-computer.jpg"
import backgroundImagePageFour from "../../assets/future-technology-processing-business-background-with-abstract-circuit-boards.jpg"


//LOGOHEADERSECTIONS
import BootGeek from "../../assets/BOT-0001-23 Brand_VF-03.png"

//HEADERTEXTIMAGE
import HeaderText from '../../assets/Novo_Projeto__10_-removebg-preview.png'

const BoxInicio= styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${backgroundImagePageOne})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "-30px",
    [theme.breakpoints.down('sm')]: {
      marginTop: "0px",
    }
  }));
  
const SectionOne = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "50%",
  height: "100vh",
  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 40%, rgba(13, 18, 11, 0.4) 80%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "right",
  zIndex: 999999,
 
  backdropFilter: "blur(10px)",
  [theme.breakpoints.down('sm')]: {
    zIndex: 999,
    maxWidth: "80%",
    marginTop: "0px",
  }
}));

const SectionTwo = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
 
}));


const BoxContext = styled(Box)(({ theme }) => ({
  width: "100%", maxWidth: 500, textAlign: "left",paddingLeft: "15%", paddingRight: "15%",
  [theme.breakpoints.down('sm')]: {
    maxWidth: 250
  }
 
}));

const buttons = [
  <Button key="three" sx={{mb: 1,background: "none", border: `1px solid ${alpha( "#0D120B", 0.4)}`, backgroundColor: "none" , borderColor: "none", color: "white", fontWeight: 700}}>01</Button>,
  <Button key="three" sx={{mb: 1,background: "none", border: `1px solid ${alpha( "#0D120B", 0.4)}`, backgroundColor: "none" , borderColor: "none", color: "white", fontWeight: 700}}>02</Button>,
  <Button key="three" sx={{mb: 1,background: "none", border: `1px solid ${alpha( "#0D120B", 0.4)}`, backgroundColor: "none" , borderColor: "none", color: "white", fontWeight: 700}}>03</Button>,
  <Button key="three" sx={{mb: 1,background: "none", border: `1px solid ${alpha( "#0D120B", 0.4)}`, backgroundColor: "none" , borderColor: "none", color: "white", fontWeight: 700}}>04</Button>,
];

  

function Inicio() {

  const theme = useTheme()
  return (
    <div name="inicio" id="inicio">
      <BoxInicio >
      <SectionOne>
      
          <Box paddingTop={6} sx={{paddingLeft: "15%", paddingRight: "15%"}} >
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              
                color="inherit"
         
              >
              <Box
                component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  
                    maxWidth: { xs: 250, md: 250,sm:250 },
                    
                  }}
                alt="The house from the offer."
                src={BootGeek}
              />
              </IconButton>
          </Box>

          <BoxContext style={stylesDivsOne}>
          <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
                maxHeight: { xs: 450, md: 450 },
                maxWidth: { xs: 550, md: 650,sm:250 },
                
              }}
              alt="The house from the offer."
              src={HeaderText}
            />
          </BoxContext>

          <BoxContext style={stylesDivsTwo}>
            <Typography style={TextConteudo}>
            Formado por engenheiros de software a Botgeek
            veio para facilitar o desenvolvimento de software.
            Entendemos a base de um bom software é o
            relacionamento com nossos clientes.
            </Typography>
          </BoxContext>
            <Divider sx={{color: "#C4F015",background: "#C4F015", width: "80%",marginLeft: "15%", marginBottom: "5%", marginTop: "5%"}}></Divider>
            <BoxContext style={stylesDivsThree}>
            <Typography  style={TextLastConteudo}>Nos estamos a mais de 7 anos no
mercado de tecnologia inovando e
construindo sonhos.</Typography>
          </BoxContext>
       
      </SectionOne>
      <SectionTwo sx={{
    
    
  }}> 
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
      </SectionTwo>
    </BoxInicio>
    </div>
  );
}

export default Inicio;


const stylesDivsOne = {
  paddingTop: "8%"
}

const stylesDivsTwo = {
  paddingTop: "3%"
}
const stylesDivsThree = {
 
}
const TextConteudo = {
  color:"white",
  fontWeight: 500,
  letterSpacing: 1.8,
  lineHeight: 2,
  wordSpacing: 2,
  fontSize: 15
}

const TextLastConteudo = {
  color:"#C4F015",
  fontWeight: 500,
  letterSpacing: 1.5,
  lineHeight: 1.5,
 
  fontSize: 20
}
