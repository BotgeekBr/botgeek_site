import React from "react";
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material"
import {  styled } from '@mui/material/styles';

import ImageBoxDesenvolvimento from "../../assets/digital-cyberspace-data-network-connections.jpg"

import Carousel from "react-material-ui-carousel";


const BoxInicio= styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100vh",  
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  
   
  
  }));
  


  const tutorialSteps = [
    {
      label: 'SAMSUNG 21',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      c:"512",
      desc:"this is a TV of 32 inch not for you"
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      c:"312",
      desc:"this is a TV of 32 inch not for you"
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
       c:"412",
      desc:"this is a TV of 32 inch not for you"
    },
    {
      label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
      imgPath:
        'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
       c:"132",
      desc:"this is a TV of 32 inch not for you"
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      c:"112",
      desc:"this is a TV of 32 inch not for you"
    },
  ];
  
  
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

  

  function CardSwipeable(props)
{
   const classes = useStyles()
    return (
      <div classes={classes.root} >
         <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>

          <Card className={`${classes.root} ${classes.card}`} sx={{margin: 2}}>
          <CardActionArea>{console.log(props.item.imgPath)}
          <Box
                  component="img"
                  sx={{
                    height: "100%",
                    maxHeight: { xl: 500 , md: 250, sm: "100%" },
                    width: 300,
                    maxWidth: { xl: 300, md: 250, sm: 150 },
                    borderRadius: 5
                  }}
                

                  src={ImageBoxDesenvolvimento}
                />



              <CardContent>
                <Typography className={classes.typo} gutterBottom variant="h6" component="h6" color="secondary">
                 EMPRESA JOSE DE AGOSTO
                </Typography>
                <Typography className={`${classes.typo} ${classes.mx}`} component="p" color="inherit" >
                  COMENTARIO
                </Typography>
                <Typography  className={`${classes.typo} ${classes.mx}`} color="textSecondary" variant="h7" component="h3">
                  Trabalham muito bem
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          
          <Card className={`${classes.root} ${classes.card}`}  sx={{margin: 2}}>
          <CardActionArea>{console.log(props.item.imgPath)}
          <Box
                  component="img"
                  sx={{
                    height: "100%",
                    maxHeight: { xl: 500 , md: 250, sm: "100%" },
                    width: 300,
                    maxWidth: { xl: 300, md: 250, sm: 150 },
                    borderRadius: 5
                  }}
                

                  src={ImageBoxDesenvolvimento}
                />



              <CardContent>
                <Typography className={classes.typo} gutterBottom variant="h6" component="h6" color="secondary">
                 EMPRESA JOSE DE AGOSTO
                </Typography>
                <Typography className={`${classes.typo} ${classes.mx}`} component="p" color="inherit" >
                  COMENTARIO
                </Typography>
                <Typography  className={`${classes.typo} ${classes.mx}`} color="textSecondary" variant="h7" component="h3">
                  Trabalham muito bem
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={`${classes.root} ${classes.card}`}  sx={{margin: 2}}>
          <CardActionArea>{console.log(props.item.imgPath)}
          <Box
                  component="img"
                  sx={{
                    height: "100%",
                    maxHeight: { xl: 500 , md: 250, sm: "100%" },
                    width: 300,
                    maxWidth: { xl: 300, md: 250, sm: 150 },
                    borderRadius: 5
                  }}
                

                  src={ImageBoxDesenvolvimento}
                />



              <CardContent>
                <Typography className={classes.typo} gutterBottom variant="h6" component="h6" color="secondary">
                 EMPRESA JOSE DE AGOSTO
                </Typography>
                <Typography className={`${classes.typo} ${classes.mx}`} component="p" color="inherit" >
                  COMENTARIO
                </Typography>
                <Typography  className={`${classes.typo} ${classes.mx}`} color="textSecondary" variant="h7" component="h3">
                  Trabalham muito bem
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={`${classes.root} ${classes.card}`}  sx={{margin: 2}}>
          <CardActionArea>{console.log(props.item.imgPath)}
          <Box
                  component="img"
                  sx={{
                    height: "100%",
                    maxHeight: { xl: 500 , md: 250, sm: "100%" },
                    width: 300,
                    maxWidth: { xl: 300, md: 250, sm: 150 },
                    borderRadius: 5
                  }}
                

                  src={ImageBoxDesenvolvimento}
                />



              <CardContent>
                <Typography className={classes.typo} gutterBottom variant="h6" component="h6" color="secondary">
                 EMPRESA JOSE DE AGOSTO
                </Typography>
                <Typography className={`${classes.typo} ${classes.mx}`} component="p" color="inherit" >
                  COMENTARIO
                </Typography>
                <Typography  className={`${classes.typo} ${classes.mx}`} color="textSecondary" variant="h7" component="h3">
                  Trabalham muito bem
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          
         </Box>
     </div>
    )
}


  

function Clientes() {

  const classes = useStyles()
  
  return (
    <div id="clientes" name="clientes">
    <BoxInicio >
     
       <Carousel classeName={classes.root} >
          {
                tutorialSteps.map( (item, i) => <CardSwipeable key={i} item={item} /> )
            }
       </Carousel>
    </BoxInicio>
    </div>
  );
}

export default Clientes;



