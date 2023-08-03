import * as React from 'react';
import {Box, Grid, Typography} from "@mui/material"
import { alpha,styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ImageBoxDesenvolvimento from "../../assets/businessman-touching-icon-mobile-phone-mail-telephone-address.jpg"

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

  return (
    <div name="" id="contato">
      <BoxInicio >
          <Box sx={{width: "100%", height: "100", display: "flex", justifyContent: "center", alignItems: "center"}}>
            
            

            <Grid container spacing={2} sx={{ width: "100%",display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Grid item xs={2}></Grid>

              <Grid item xl={3} md={12} gap={2} sx={{width: "100%" ,height: "100%",display: "flex", justifyContent: "center", alignItems: "center"}} >
                  <Box sx={{width: "100%" ,display: "flex", flexDirection: "column", padding: 5, background: "rgba(0,0,0,0.1)", height: "50%"}} gap={2}>

                    <Typography variant='h5'>Entre em contato para mais informações!</Typography>
                    <Typography variant='p'>Preencha todos os dados solicitados no formulário.</Typography>
                    <Typography variant='p'>Aguarde que logo responderemos sua solicitação de contato.</Typography>
                    <TextField
                      id="outlined-controlled"
                      label="Nome"
                      value={name}
                      sx={{background: "white"}}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setName(event.target.value);
                    
                      }}
                    />
                    <TextField
                      id="outlined-controlled"
                      label="Telefone"
                      value={name}
                      sx={{background: "white"}}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setName(event.target.value);
                      }}
                    /> 
                    <TextField
                      id="outlined-controlled"
                      label="Email"
                      sx={{background: "white"}}
                      value={name}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setName(event.target.value);
                      }}
                    /> 
                    <TextField
                      id="outlined-controlled"
                      label="Menssagem"
                      sx={{background: "white"}}
                      value={name}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setName(event.target.value);
                      }}
                    />        
                </Box>
              </Grid>

              <Grid item xl={5} md={12} sx={{height: "100%",display: "flex", justifyContent: "center", alignItems: "center"}} >
                      
                      <BoxImage
                                      component="img"
                                    
                                      alt="The house from the offer."

                                      src={ImageBoxDesenvolvimento}
                                    />
                      
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Box>
      </BoxInicio>
    </div>
  );
}

export default Contato;



