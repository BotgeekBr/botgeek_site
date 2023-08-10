import React from "react";
import {Avatar, Box, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography} from "@mui/material"
import {  styled } from '@mui/material/styles';
import ImageBoxDesenvolvimento from "../../assets/digital-cyberspace-data-network-connections.jpg"
import Carousel from "react-material-ui-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import ShareIcon from "@mui/icons-material/Share";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
// Direct React component imports

 
import cakedigital from "./../../assets/cakedigital.png"
import energiadetodos from "./../../assets/energiadetodos.png"
import drake from "./../../assets/drake.png"
import ayus from "./../../assets/ayus.png"
import morino from "./../../assets/morino.png"
import viagens from "./../../assets/viagens.png"
import oficial from "./../../assets/oficial.png"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



const BoxInicio= styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100vh",  
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
   
    marginTop: 60,
    [theme.breakpoints.down('lg')]: {
      marginTop: 20,
      marginBottom: 40
    }
  }));

  const SwiperStyle= styled(Swiper)(({ theme }) => ({
    width: "80%",
   padding:10,

   [theme.breakpoints.down('lg')]: {
    width: "100%",
  },
   [theme.breakpoints.down('sm')]: {
    display:"none"
  }
  }));

  const SwiperMobileStyle= styled(Swiper)(({ theme }) => ({
    width: "80%",
    padding:10,
    [theme.breakpoints.up('sm')]: {
      display:"none"
    }
  
  }));
 


  
  
  
  const useStyles = styled({
    root:{
     margin:"10px 10px",
     display:"flex",
     flexDirection:"row" 
    },
    
   
   
    image:{
      width:"100%"
    },
    typo:{
      textAlign:"center"
    },
    mx:{
      margin:"6px 0px"
    }
  })

  




  

function Clientes() {

  const classes = useStyles()
  
  return (
    <div id="clientes" name="clientes">
      <BoxInicio >
        <Box sx={{display:"flex", width:"100%", background:"rgba(0,0,0,0.1)", paddingTop: 20, paddingBottom: 20}}>
        <SwiperStyle
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                
             
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              
              >
                <SwiperSlide>
                <Card sx={{ maxWidth: 350 }}>
                  
                    <Box sx={{padding: 7}}>
                    <CardMedia
                      component="img"
                          height="100"
                      width="100"
                      image={cakedigital}
                      alt="Paella dish"

                    />
                  </Box>
                  
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{ maxWidth: 350 }}>
                  
                    <Box sx={{padding: 7}}>
                  <CardMedia
                    component="img"
                        height="100"
                      width="100"
                    image={energiadetodos}
                    alt="Paella dish"

                  />
                  </Box>
                  
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{ maxWidth: 350 }}>
                  
                    <Box sx={{padding: 7}}>
                    <CardMedia
                      component="img"
                          height="100"
                      width="100"
                      image={drake}
                      alt="Paella dish"
                 

                    />
                  </Box>
                 
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{ maxWidth: 350 }}>
                  
                    <Box sx={{padding: 7}}>
                    <CardMedia
                      component="img"
                          height="100"
                      width="100"
                      image={ayus}
                      alt="Paella dish"

                    />
                  </Box>
                  
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{ maxWidth: 300 }}>
                    <Box sx={{padding: 7}}>
                    <CardMedia
                      component="img"
                        height="100"
                      width="100"
                      image={morino}
                      alt="Paella dish"

                    />
                  </Box>
                
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card sx={{ maxWidth: 350 }}>
                      <Box sx={{padding: 7}}>
                      <CardMedia
                        component="img"
                            height="100"
                      width="100"
                        image={viagens}
                        alt="Paella dish"

                      />
                    </Box>
                   
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card sx={{ maxWidth: 350 }}>
                      <Box sx={{padding: 7}}>
                      <CardMedia
                        component="img"
                            height="100"
                      width="100"
                        image={oficial}
                        alt="Paella dish"

                      />
                    </Box>
                    
                  </Card>
                </SwiperSlide>

        </SwiperStyle>
        <SwiperMobileStyle       // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              
              >
                <SwiperSlide>
                <Card sx={{ maxWidth: 350 }}>
                  
                    <Box sx={{padding: 7}}>
                    <CardMedia
                      component="img"
                          height="100"
                      width="100"
                      image={cakedigital}
                      alt="Paella dish"

                    />
                  </Box>
                  
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{ maxWidth: 350 }}>
                  
                    <Box sx={{padding: 7}}>
                  <CardMedia
                    component="img"
                        height="100"
                      width="100"
                    image={energiadetodos}
                    alt="Paella dish"

                  />
                  </Box>
                  
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{ maxWidth: 350 }}>
                  
                    <Box sx={{padding: 7}}>
                    <CardMedia
                      component="img"
                          height="100"
                      width="100"
                      image={drake}
                      alt="Paella dish"
                 

                    />
                  </Box>
                 
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{ maxWidth: 350 }}>
                  
                    <Box sx={{padding: 7}}>
                    <CardMedia
                      component="img"
                          height="100"
                      width="100"
                      image={ayus}
                      alt="Paella dish"

                    />
                  </Box>
                  
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{ maxWidth: 300 }}>
                    <Box sx={{padding: 7}}>
                    <CardMedia
                      component="img"
                        height="100"
                      width="100"
                      image={morino}
                      alt="Paella dish"

                    />
                  </Box>
                
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card sx={{ maxWidth: 350 }}>
                      <Box sx={{padding: 7}}>
                      <CardMedia
                        component="img"
                            height="100"
                      width="100"
                        image={viagens}
                        alt="Paella dish"

                      />
                    </Box>
                   
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card sx={{ maxWidth: 350 }}>
                      <Box sx={{padding: 7}}>
                      <CardMedia
                        component="img"
                            height="100"
                      width="100"
                        image={oficial}
                        alt="Paella dish"

                      />
                    </Box>
                    
                  </Card>
                </SwiperSlide>

                
        </SwiperMobileStyle>
        </Box>
      </BoxInicio>
    </div>
  );
}

export default Clientes;



