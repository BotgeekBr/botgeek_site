import * as React from 'react';
import { Box, Grid, IconButton, Typography } from "@mui/material"
import { alpha, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ImageBoxDesenvolvimento from "../../assets/businessman-touching-icon-mobile-phone-mail-telephone-address.jpg"
import buttonImage from "../../assets/iconSubmit.png"
// import emailjs from 'emailjs-com'; // Importe a biblioteca emailjs-com
import emailjs from '@emailjs/browser';

import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BoxInicio = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",



}));



const BoxImage = styled(Box)(({ theme }) => ({
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

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Configurar emailjs
  //   emailjs.init('4dOX3BcFcA2f__Tgo');

  //   // Enviar o formulário usando o serviço de email
  //   emailjs.sendForm('service_c5m0s6l', 'template_ekfisaa', {
  //     from_name: name,
  //     telefone:telefone,
  //     email:email,
  //     message:mensagem,
  //   })
  //     .then((response) => {
  //       toast.success('Mensagem enviada com sucesso!');
  //       // Limpar os campos após o envio
  //       setName('');
  //       setTelefone('');
  //       setEmail('');
  //       setmensagem('');
  //     })
  //     .catch((error) => {
  //       toast.error('Erro ao enviar a mensagem:');
  //     });
  // };


  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c5m0s6l', 'template_ekfisaa', form.current, '4dOX3BcFcA2f__Tgo')
      .then((result) => {
        toast.success('Mensagem enviada com sucesso!');
      }, (error) => {
        toast.error('Erro ao enviar a mensagem:');
      });
  };


  return (
    <div name="" id="contato">
      <ToastContainer></ToastContainer>
      <BoxInicio >
        <Box sx={{ width: "100%", height: "100", display: "flex", justifyContent: "center", alignItems: "center" }}>



          <Grid container spacing={2} sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Grid item xs={2} md={12} sm={12} ></Grid>

            <Grid item xl={3} md={6} sm={12} gap={2} sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >
            <form ref={form} onSubmit={sendEmail}>
              <Box sx={{ background: "rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} gap={1} >
                <Box sx={{ padding: 5, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                  <Typography variant='h5' sx={{ fontFamily: "Work Sans, sans-se", marginBottom: 2 }}>Entre em contato para mais informações!</Typography>
                  <Typography variant='p' sx={{ fontFamily: "Work Sans, sans-se", marginBottom: 1 }}>Preencha todos os dados solicitados no formulário.</Typography>
                  <Typography variant='p' sx={{ fontFamily: "Work Sans, sans-se", marginBottom: 2 }}>Aguarde que logo responderemos sua solicitação de contato.</Typography>
                 
                    
                    <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Name"
                    type="text" name="user_name"
                    sx={{ background: "white", marginBottom: 1 }}
                    
                  />

                    <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Email"
                    type="email" name="from_email"
                    sx={{ background: "white", marginBottom: 1 }}
                    
                  />
                    <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Telefone"
                    type="phone" name="from_telefone"
                    sx={{ background: "white", marginBottom: 1 }}
                    
                  />
                    
                    <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Menssagem"
                    name="message"
                    sx={{ background: "white", marginBottom: 1 }}
                    
                  />
                 
                </Box>

                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "right", width: "100%" }}><IconButton type="submit" value="Send"> <Box component={"img"} src={buttonImage}></Box></IconButton> </Box>
              </Box>
              </form>
            </Grid>

            <Grid item xl={5} md={6} sm={12} sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >

              <BoxImage
                component="img"

                alt="The house from the offer."
                sx={{ display: { xl: "flex", lg: "flex", md: "flex", sm: "none", xs: "none" } }}
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



