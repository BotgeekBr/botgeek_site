import React from "react";
import {Box, Divider, IconButton, Typography} from "@mui/material"
import { alpha,styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Missao from "../../assets/missao.png"
import Valores from "../../assets/valores.png"
import Visao from "../../assets/visao.png"

const BoxInicio= styled(Box)(({ theme }) => ({
    width: "100%",

    background: "white",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
    },
  }));
  const BoxConteudo= styled(Box)(({ theme }) => ({
    background: "black",width: "100%", maxWidth: 300,padding: "2.5em",
    [theme.breakpoints.down('sm')]: {
      padding: "1.5em",
      
    },
    [theme.breakpoints.down('md')]: {
          padding: "1.5em",
      },

  }));

   const BoxDivs= styled(Box)(({ theme }) => ({
   
    [theme.breakpoints.down('sm')]: {
      padding: "0",
      flexDirection: "column",
    },
    [theme.breakpoints.down('md')]: {
      padding: "0",
  },
    
  }));


  const TextConteudo= styled(Typography)(({ theme }) => ({
    color:"white",
    fontWeight: 500,
    letterSpacing: 1.5,
    lineHeight: 1.5,
    wordSpacing: 1.5,
    fontSize: 15,
  }));
  
  
  const TextLastConteudo= styled(Typography)(({ theme }) => ({
    color:"#C4F015",
    fontWeight: 500,
    letterSpacing: 1.5,
    lineHeight: 1.5,
    fontSize: 15
  }));
  const BoxMissionValueVision = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column", 
    alignItems: "center",
    justifyContent:"center",
    textAlign: "center",
    [theme.breakpoints.down('sm')]: {
      marginTop: 20
    },
  })); 
function Sobre() {
  return (
    <div name="sobre" id="sobre">
    <BoxInicio >

      <BoxDivs sx={{padding: 15, marginTop: 10}}>
        <BoxConteudo >
            <TextConteudo>A Botgeek é uma empresa formacional,
              temos um projeto de formação de pessoas e
              capacitação delas. Mas melhor que isso, a
              Botgeek no final da formação, contrata os
              melhores alunos para que eles possam já
              sair do curso atuando em projetos reais e
              inovadores no mercado real.
              A Botgeek também é uma empresa que
              acredita em princípios bíblicos, temos nossa
              visão , missão e valores pautados na palavra
              de Deus, com objetivo de construir cada vez 
              mais uma sociedade melhor.
              </TextConteudo>

              <Divider sx={{color: "#C4F015",background: "#C4F015", width: "100%", marginBottom: "8%", marginTop: "8%"}}></Divider>

              <TextLastConteudo>Nos somos uma empresa sustentável, com
                princípios sustentáveis.
                Venha nos conhecer melhor, marque uma
                conversa conosco.
              </TextLastConteudo>
        </BoxConteudo>
      </BoxDivs>
      <BoxDivs sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", marginTop: 10}}>
              
              <BoxMissionValueVision >
                <Box
                  component="img"
                    sx={{
                      height: "100%",
                      width: "100%",
                    
                      maxWidth: { xs: 200, md: 250,sm:250 },
                      
                    }}
                  alt="The house from the offer."
                  src={Missao}
                />
                <Typography sx={{fontSize: 20, fontWeight: 700, marginTop: 4, textAlign: "center"}}>Missão</Typography>
              </BoxMissionValueVision>

              
              <BoxMissionValueVision sx={{ marginLeft: 10, marginRight: 10 }} >
                <Box
                component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  
                    maxWidth: { xs: 200, md: 250,sm:250 },
                    
                  }}
                alt="The house from the offer."
                src={Visao}
              />
              <Typography sx={{fontSize: 20, fontWeight: 700, marginTop: 4, textAlign: "center"}}>Visão</Typography>
              </BoxMissionValueVision>

              <BoxMissionValueVision >
                <Box
                  component="img"
                    sx={{
                      height: "100%",
                      width: "100%",
                    
                      maxWidth: { xs: 200, md: 250,sm:250 },
                      
                    }}
                  alt="The house from the offer."
                  src={Valores}
                />
                <Typography sx={{fontSize: 20, fontWeight: 700, marginTop: 4, textAlign: "center"}}>Valor</Typography>
              </BoxMissionValueVision>
      </BoxDivs>
     
    </BoxInicio>
    </div>
  );
}

export default Sobre;







