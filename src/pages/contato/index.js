import * as React from 'react';
import {Box, Grid, IconButton, Typography} from "@mui/material"
import { alpha,styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ImageBoxDesenvolvimento from "../../assets/businessman-touching-icon-mobile-phone-mail-telephone-address.jpg"
import buttonImage from "../../assets/iconSubmit.png"
import emailjs from 'emailjs-com'; // Importe a biblioteca emailjs-com

import TextField from '@mui/material/TextField';

const BoxInicio= styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",  
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",

 
   
  }));
  

  const BoxImage= styled(Box)(({ theme }) => ({
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: 5,
                                        marginLeft: "-30px",
                                        display: "flex", justifyContent: "center", alignItems: "center",
                                        
                                        [theme.breakpoints.down('lg')]: {
                                          marginLeft: "0",
                                          
                                        },
                                        [theme.breakpoints.down('md')]: {
                                          marginLeft: "0",
                                        },
                                        [theme.breakpoints.down('sm')]: {
                                          marginLeft: "0",
                                        }
 
   
  }));
  
  





function Contato() {

  const [name, setName] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mensagem, setmensagem] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Configurar emailjs
    emailjs.init('brkECRN_th13a7TEX');

    // Enviar o formulário usando o serviço de email
    emailjs.send('service_qjsemrk', 'template_ajpzyyk', {
      from_name: name,
      telefone,
      email,
      mensagem,
    })
    .then((response) => {
      console.log('Mensagem enviada com sucesso!', response);
      // Limpar os campos após o envio
      setName('');
      setTelefone('');
      setEmail('');
      setmensagem('');
    })
    .catch((error) => {
      console.error('Erro ao enviar a mensagem:', error);
    });
  };


  return (
    <div name="" id="contato">
      <BoxInicio >
          <Box sx={{width: "100%", height: "100", display: "flex", justifyContent: "center", alignItems: "center"}}>
            
            

            <Grid container spacing={2} sx={{ width: "100%",display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Grid item xs={2} md={12} sm={12} ></Grid>

              <Grid item xl={3} md={6} sm={12} gap={2} sx={{width: "100%" ,height: "100%",display: "flex", justifyContent: "center", alignItems: "center"}} >
                  <Box sx={{  background: "rgba(0,0,0,0.1)",display: "flex",flexDirection: "column",justifyContent: "center", alignItems: "center"}} gap={1} >
                  <Box sx={{ padding: 5,display: "flex",flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
                                
                              <Typography variant='h5'>Entre em contato para mais informações!</Typography>
                                                  <Typography variant='p'>Preencha todos os dados solicitados no formulário.</Typography>
                                                  <Typography variant='p'>Aguarde que logo responderemos sua solicitação de contato.</Typography>
                                                  <TextField
                                                  fullWidth
                                                    id="outlined-controlled"
                                                    label="Nome"
                                                
                                                    sx={{background: "white",marginBottom: 1,marginBottom: 1}}
                                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                    setName(event.target.value);
                                                
                                                    }}
                                                  />
                                                  <TextField
                                                  fullWidth
                                                    id="outlined-controlled"
                                                    label="Telefone"
                                              
                                                    sx={{background: "white",marginBottom: 1}}
                                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                    setTelefone(event.target.value);
                                                    }}
                                                  /> 
                                                  <TextField
                                                  fullWidth
                                                    id="outlined-controlled"
                                                    label="Email"
                                                    sx={{background: "white",marginBottom: 1}}
                                               
                                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                    setEmail(event.target.value);
                                                    }}
                                                  /> 
                                                  <TextField
                                                  fullWidth
                                                    id="outlined-controlled"
                                                    label="Mensagem"
                                                    sx={{background: "white",marginBottom: 1}}
                                                    
                                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                    setmensagem(event.target.value);
                                                    }}
                                                  />    
                  </Box>  

                  <Box sx={{ display: "flex",justifyContent: "flex-end", alignItems: "right",width:"100%"}}><IconButton onClick={handleSubmit}> <Box component={"img"} src={buttonImage}></Box></IconButton> </Box>
                 </Box>
                
              </Grid>

              <Grid item xl={5} md={6} sm={12} sx={{height: "100%",display: "flex", justifyContent: "center", alignItems: "center"}} >
                      
                      <BoxImage
                                      component="img"
                                    
                                      alt="The house from the offer."

                                      src={ImageBoxDesenvolvimento}
                                    />
                      
              </Grid>
              <Grid item xs={2} md={12} sm={12}></Grid>
            </Grid>
          </Box>
      </BoxInicio>
    </div>
  );
}

export default Contato;



