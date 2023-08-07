import React, { useState } from "react";
import {Box, Divider, Grid, IconButton, Typography} from "@mui/material"
import { alpha,styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Missao from "../../assets/missao.png"
import Valores from "../../assets/valores.png"
import Visao from "../../assets/visao.png"

const BoxInicio= styled(Box)(({ theme }) => ({
    width: "90%",

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
    fontFamily: "Work Sans, sans-seri"
  }));
  
  
  const TextLastConteudo= styled(Typography)(({ theme }) => ({
    color:"#C4F015",
    fontWeight: 500,
    letterSpacing: 1.5,
    lineHeight: 1.5,
    fontSize: 15,
    fontFamily: "Work Sans, sans-seri"
  }));
  const BoxMissionValueVision = styled(Button)(({ theme,selected  }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    opacity: selected ? 1 : 0.3, // Define a opacidade do botão com base na propriedade 'selected'
     // Define a borda quando o botão não está selecionado
    cursor: "pointer", // Define o cursor como ponteiro para indicar que o botão é clicável
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  })); 
function Sobre() {

  const [selectedContent, setSelectedContent] = useState("Missão");

  // Restante do código...

  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };

  const BoxValue = () =>{

      return <Box>
        <Typography sx={{marginTop: 4}}><span style={{fontWeight: 700}}>Compromisso com a Excelência:</span> Buscamos constantemente aprimorar nossos métodos e oferecer o
        melhor em capacitação técnica e valores morais, visando sempre à excelência</Typography>
        <Typography sx={{marginTop: 4}}><span style={{fontWeight: 700}}>Ética e Integridade:</span> Baseamos nossas ações em princípios bíblicos, promovendo uma cultura de ética e
          integridade em todas as nossas relações com colaboradores, clientes e parceiros</Typography>
        <Typography sx={{marginTop: 4}}><span style={{fontWeight: 700}}>Inovação e Criatividade:</span> Estimulamos a busca por soluções inovadoras e criativas, tanto em nossos
          projetos tecnológicos quanto na maneira como abordamos desafios do mercado</Typography>
        <Typography sx={{marginTop: 4}}><span style={{fontWeight: 700}}>Formação e Oportunidade:</span> Valorizamos a formação contínua dos nossos colaboradores e proporcionamos
          oportunidades reais de atuação em projetos significativos desde o início de suas jornadas profissionais.</Typography>
        <Typography sx={{marginTop: 4}}><span style={{fontWeight: 700}}>Responsabilidade Social:</span> Comprometemo-nos a contribuir para uma sociedade melhor, participando
          ativamente em iniciativas sociais e promovendo o desenvolvimento sustentável</Typography>
        <Typography sx={{marginTop: 4}}><span style={{fontWeight: 700}}>Trabalho em Equipe</span>: Acreditamos que o trabalho colaborativo e respeitoso é fundamental para alcançar
          resultados excepcionais, valorizando a diversidade de ideias e perspectiva</Typography>
        <Typography sx={{marginTop: 4}}><span style={{fontWeight: 700}}>Paixão pelo Aprendizado:</span> Estimulamos a paixão pelo aprendizado contínuo, incentivando a curiosidade e o
          crescimento pessoal e profissional de nossos colaboradores.</Typography>
      </Box>
  }

  const BoxVision = () =>{

    return <Typography sx={{marginTop: 4}}> Ser reconhecida como a principal softhouse formacional, referência na capacitação de profissionais de
    tecnologia, que combinam excelência técnica com valores éticos e morais fundamentados na palavra de
    Deus</Typography>
  } 

  const BoxMission = () =>{

    return <Typography sx={{marginTop: 4}}>Capacitar e formar pessoas por meio de projetos inovadores, baseados em princípios bíblicos, para que se
    tornem profissionais altamente qualificados e comprometidos em transformar o mercado de tecnologia e
    contribuir para a construção de uma sociedade melhor</Typography>
  }

  return (
    <div name="sobre" id="sobre">
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>

    <BoxInicio >

      
     
     
      <Grid container xs={12}> 
        <Grid item lg={5} md={12} sm={12} xs={12} sx={{padding: {xl:15, lg:10, sm:0, xs: 0}, marginTop: 10, display:"flex", justifyContent: "center"}}>
          <BoxConteudo >
              <TextConteudo>A Botgeek é uma empresa formacional,
                temos um projeto de formação de pessoas e
                capacitação delas. Mas melhor que isso, a
                Botgeek no final da formação, contrata os
                melhores alunos para que eles possam já
                sair do curso atuando em projetos reais e
                inovadores no mercado real. <br></br><br></br>
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
        </Grid>
      
        <Grid item lg={7} md={12} sm={12} xs={12} sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", width: "100%", marginTop: 10}}>
             <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", marginTop: 10}}>
                <BoxMissionValueVision   onClick={() => handleButtonClick("Missão")}
            selected={selectedContent === "Missão"}>
                  <Box
                    component="img"
                      sx={{
                        height: "100%",
                        width: "100%",
                        width: {xl: "200px", lg:"200px" ,sm:"85px" ,xs:"85px"},
                        maxWidth: { xs: 200, md: 250,sm:250 },
                        
                      }}
                    alt="The house from the offer."
                    src={Missao}
                  />
                  <Typography sx={{fontSize: 20, fontWeight: 700, marginTop: 4, textAlign: "center",fontFamily: "Work Sans, sans-seri",color:"black",textTransform:"capitalize"}}>Missão</Typography>
                </BoxMissionValueVision>

                
                <BoxMissionValueVision sx={{ marginLeft: 10, marginRight: 10 }}   onClick={() => handleButtonClick("Visão")}
            selected={selectedContent === "Visão"}>
                  <Box
                  component="img"
                    sx={{
                      height: "100%",
                      width: "100%",
                      width: {xl: "200px", lg:"200px" ,sm:"85px" ,xs:"85px"},
                      maxWidth: { xs: 200, md: 250,sm:250 },
                      
                    }}
                  alt="The house from the offer."
                  src={Visao}
                />
                <Typography sx={{fontSize: 20, fontWeight: 700, marginTop: 4, textAlign: "center",fontFamily: "Work Sans, sans-seri",color:"black",textTransform:"capitalize"}}>Visão</Typography>
                </BoxMissionValueVision>

                <BoxMissionValueVision  onClick={() => handleButtonClick("Valor")}
            selected={selectedContent === "Valor"}>
                  <Box
                    component="img"
                      sx={{
                        height: "100%",
                        width: "100%",
                        width: {xl: "200px", lg:"200px" ,sm:"85px" ,xs:"85px"},
                        maxWidth: { xs: 200, md: 250,sm:250 },
                        
                      }}
                    alt="The house from the offer."
                    src={Valores}
                  />
                  <Typography sx={{fontSize: 20, fontWeight: 700, marginTop: 4, textAlign: "center",fontFamily: "Work Sans, sans-seri",color:"black",textTransform:"capitalize"}}>Valores</Typography>
                </BoxMissionValueVision>
             </Box>
             
             <Box>
              <Box>
                {selectedContent === "Missão" && <BoxMission />}
                {selectedContent === "Visão" && <BoxVision />}
                {selectedContent === "Valor" && <BoxValue />}
              </Box>
             </Box>
        </Grid>
      </Grid>

      {/* <BoxDivs sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", marginTop: 10}}>
              
            
      </BoxDivs> */}
    </BoxInicio>
    </Box>
    </div>
  );
}

export default Sobre;







