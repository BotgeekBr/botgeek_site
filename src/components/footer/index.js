import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LogoBootGeek from "../../assets/BOT-0001-23 Brand_VF-03.png"


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const BoxFooter = styled(Box)((theme) => ({
  
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,1)",
    // marginTop: theme.spacing(8),
    padding: 6
  
}));

export default function Footer(props) {
  
  const { description, title } = props;

  return (
    <BoxFooter >
      <Container maxWidth="lg" sx={{display: 'flex', flexDirection: 'row', justifyContent: "center", alignItems: "center",padding: 6, width: "100%", height: "100%"}}>
        <Grid container xs={12} sx={{display: 'flex', justifyContent: "center", alignItems: "center"}} spacing={2}> 
          <Grid item lg={4} md={12} sm={12} sx={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
          <Box sx={{color: 'white',width: "100%",display: 'flex', justifyContent: "center", alignItems: "center",flexDirection: "column"}} >
              <nav aria-label="main mailbox folders" sx={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
              <List >

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <EmailIcon  sx={{color: '#C4F015'}}/>
                    </ListItemIcon>
                    <ListItemText  primary="contato@botgeek.com.br" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <WhatsAppIcon  sx={{color: '#C4F015'}}/>
                    </ListItemIcon>
                    <ListItemText primary="(41) 9991 722 778" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InstagramIcon  sx={{color: '#C4F015'}}/>
                    </ListItemIcon>
                    <ListItemText primary="@botGeek_" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>

            <Box>
             
              
              
              <ListItem disablePadding sx={{marginTop: 8}}>
                  <ListItemButton>
                    <ListItemIcon>
                      <CopyrightIcon  sx={{color: 'rgba(255,255,255,0.7)',fontSize: 15}} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{fontSize: '10px', marginLeft: "-20px",color: "rgba(255,255,255,0.7)"}}    primary="2023 Botgeek | Todos os direitos reservados" ></ListItemText>
                  </ListItemButton>
                </ListItem>
              
             
            </Box>
        </Box>
          </Grid>

          <Grid item lg={4} md={6} sm={6} sx={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
            <Box sx={{width: "100%", display: "flex", alignItems: "center"}}>
              <Box
                component="img"
                sx={{
                  
                  width: "100%",
                }}
                alt="The house from the offer."
                src={LogoBootGeek}
              />
            </Box>
          </Grid>

          <Grid item lg={4} md={12} sm={12} sx={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
          <Box sx={{width: "100%", display: "flex",alignItems:"center",justifyContent: "space-between", color: 'white',flexDirection: "column"}}>
                  <Box sx={{width: "100%", display: "flex",justifyContent:"center", color: 'white', padding: 2}}>
                  <Box  sx={{display: "flex", alignItems: "left", flexDirection: 'column', textAlign: 'left', arginLeft: 1, height: 80, borderLeft: "1px solid white", padding: 2,paddingTop: 0}}>
                    <Typography sx={{fontSize: 13, fontWeight: 500, textTransform: 'uppercase'}}>
                    INÍCIO

                    </Typography>
                    <Typography sx={{marginTop: 2 ,fontSize: 13, fontWeight: 500, textTransform: 'uppercase'}}>
                    SOBRE NÓS

                    </Typography>
                    <Typography sx={{marginTop: 2,fontSize: 13, fontWeight: 500, textTransform: 'uppercase'}}>
                    SOLUÇÕES
                    </Typography>
                  </Box>
                  <Box  sx={{display: "flex", alignItems: "left", flexDirection: 'column', textAlign: 'left', marginLeft: 1, height: 80, borderLeft: "1px solid white", padding: 2,paddingTop: 0}}>
                    <Typography sx={{fontSize: 13, fontWeight: 500, textTransform: 'uppercase'}}>
                    CLIENTES

                    </Typography>
                    <Typography sx={{marginTop: 2,fontSize: 13, fontWeight: 500, textTransform: 'uppercase'}}>
                    CONTATO

                    </Typography>
                   
                  </Box>


                  </Box>  

                  <Box sx={{ display: "flex",justifyContent:"center", alignItems:'center', color: 'white'}}>
                    <ListItem disablePadding sx={{marginTop: 8}}>
                        <ListItemButton>
                        <ListItemText primaryTypographyProps={{fontSize: '10px', marginLeft: "-20px" ,color: 'rgba(255,255,255,0.5)'}}    primary="Desenvolvido por: " ></ListItemText>

                          <ListItemText primaryTypographyProps={{marginLeft:1,fontSize: '10px', color: 'rgba(255,255,255,1)'}}    primary=" Lança Design e Botgeek" ></ListItemText>
                        </ListItemButton>
                      </ListItem>
                  </Box>   
        </Box>
          </Grid>
        </Grid>
        

        

        
      </Container>
    </BoxFooter>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};