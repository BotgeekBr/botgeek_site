import React, { useEffect, useState } from "react";
import {Box, Divider, Grid, IconButton, Typography} from "@mui/material"
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

const backgroundImageArray = [
  backgroundImagePageOne,
  backgroundImagePageTwo,
  backgroundImagePageTthee,
  backgroundImagePageFour
];




const BoxInicio= styled(Box)(({ theme,backgroundImage  }) => ({
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
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
      flexDirection:"column"
    },
    opacity: "fadeInOut ? 1 : 0", // Inicia com a opacidade definida pelo fadeInOut
    transition: "opacity 0.5s ease-in-out", // Adiciona a transição
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
    maxWidth: "100%",
    marginTop: "0px",
  }
}));

const SectionTwo = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  [theme.breakpoints.down('sm')]: {
   
    flexDirection:"row"
  }
}));


const ButtonGroupList = styled(ButtonGroup)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection:"column",
  backgroundColor: alpha( "#0D120B", 0.6),
              padding: 1,
              backdropFilter: "blur(10px)",
              borderRadius: 3,
              [theme.breakpoints.down('sm')]: {
   
                flexDirection:"row"
              }
}));



const BoxContext = styled(Box)(({ theme }) => ({
  width: "100%", maxWidth: 400, textAlign: "left",paddingLeft: "15%", paddingRight: "15%",
  [theme.breakpoints.down('lg')]: {
    maxWidth: 300
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 250
  }
 
}));

const getButtonStyle = (buttonIndex, currentImageIndex) => ({
  mb: 1,
  background: "none",
  border: `1px solid ${alpha( "#0D120B", 0.4)}`,
  backgroundColor: "none",
  borderColor: "none",
  color: buttonIndex === currentImageIndex ? "rgb(196, 240, 21)" : "white", // Altere a cor do botão ativo
  fontWeight: 700,
});

  

function Inicio() {
 

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeInOut, setFadeInOut] = useState(true);

  const buttons = [
    <Button key="one" onClick={() => setCurrentImageIndex(0)} sx={getButtonStyle(0, currentImageIndex)}>01</Button>,
    <Button key="two" onClick={() => setCurrentImageIndex(1)} sx={getButtonStyle(1, currentImageIndex)}>02</Button>,
    <Button key="three" onClick={() => setCurrentImageIndex(2)} sx={getButtonStyle(2, currentImageIndex)}>03</Button>,
    <Button key="four" onClick={() => setCurrentImageIndex(3)} sx={getButtonStyle(3, currentImageIndex)}>04</Button>,
  ];

 
  

  useEffect(() => {
    const intervalTime = 9000; // Defina o tempo em milissegundos (5 segundos)
    const interval = setInterval(() => {
      setFadeInOut(false); // Inicia a transição para ocultar a imagem
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImageArray.length);
        setFadeInOut(true); // Inicia a transição para exibir a nova imagem
      }, 500); // Tempo suficiente para ocultar a imagem completamente (deve ser igual ao tempo de transição CSS)
    }, intervalTime);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado

  }, []);

  const theme = useTheme()
  return (
    <div name="inicio" id="inicio">
      <BoxInicio backgroundImage={backgroundImageArray[currentImageIndex]}>
        <SectionOne>
        
            <Grid container xs={12}>
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

              

              
              
              <Grid item xs={2}></Grid>
                <Grid item xl={8} lg={8} md={8} xs={12}>
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
                </Grid>
              <Grid item xs={2}></Grid>




              <Grid item xs={2}></Grid>
                <Grid item xl={8} lg={8} md={8} xs={12}>
                <BoxContext style={stylesDivsTwo}>
                <Typography style={TextConteudo}>
                Formado por engenheiros de software a Botgeek
                veio para facilitar o desenvolvimento de software.
                Entendemos a base de um bom software é o
                relacionamento com nossos clientes.
                </Typography>
              </BoxContext>
                </Grid>
              <Grid item xs={2}></Grid>


              <Grid item xs={12}><Divider sx={{color: "#C4F015",background: "#C4F015", width: "60%",marginLeft:"10%"}}></Divider></Grid>


              
                <Grid item xl={8} lg={8} md={8} xs={12}>
                <BoxContext style={stylesDivsThree}>
                <Typography  style={TextLastConteudo}>Nos estamos a mais de 7 anos no
    mercado de tecnologia inovando e
    construindo sonhos.</Typography>
              </BoxContext>
                </Grid>
              <Grid item xs={2}></Grid>



          
            </Grid>
        </SectionOne>
        <SectionTwo >
          {/* <Box
            component="img"
            sx={{
                height: "100%",
                width: "100%",
                maxWidth: { xs: 300, md: 300,sm:300 },
                }}
            alt="The house from the offer."
            src={HeaderText}/> */}
          <ButtonGroupList variant="outlined">
            {buttons}
          </ButtonGroupList>  
        </SectionTwo>
      </BoxInicio>
    </div>
  );
}

export default Inicio;


const stylesDivsOne = {
 
}

const stylesDivsTwo = {
 
}
const stylesDivsThree = {
 
}
const TextConteudo = {
  color:"white",
  fontWeight: 500,
  letterSpacing: 1.5,
  lineHeight: 1.5,
  wordSpacing: 1.5,
  fontSize: 15,
  fontFamily: "Work Sans, sans-seri"
}

const TextLastConteudo = {
  color:"#C4F015",
  fontWeight: 500,
  letterSpacing: 1.5,
  lineHeight: 1.5,
 
  fontSize: 20,
  fontFamily: "Work Sans, sans-seri"
}
