import * as React from 'react';
import {Box} from "@mui/material"
import { alpha,styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ImageBoxDesenvolvimento from "../../assets/digital-cyberspace-data-network-connections.jpg"

import TextField from '@mui/material/TextField';

const BoxInicio= styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",  
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",

 
   
  }));
  





function Contato() {

  const [name, setName] = React.useState('Cat in the Hat');

  return (
    <div name="" id="contato">
      <BoxInicio >
          <Box sx={{display: "flex", flexDirection: "column", padding: 5, background: "rgba(0,0,0,0.1)", height: "50%"}}>
                <TextField
                    id="outlined-controlled"
                    label="Controlled"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setName(event.target.value);
                    }}
                  />
                  <TextField
                  sx={{marginTop: 2}}
                    id="outlined-controlled"
                    label="Controlled"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setName(event.target.value);
                    }}
      />
                </Box>
          <Box>
            <Box
                  component="img"
                  sx={{
                    height: "100%",
                    maxHeight: { xl: 600 , md: 250, sm: "100%" },
                    width: 600,
                    maxWidth: { xl: 600, md: 250, sm: "100%" },
                    borderRadius: 5
                  }}
                  alt="The house from the offer."

                  src={ImageBoxDesenvolvimento}
                />
              
          </Box>
      </BoxInicio>
    </div>
  );
}

export default Contato;



