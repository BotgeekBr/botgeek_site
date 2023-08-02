import React, { useState } from "react";
import {Box, Tab, Tabs, Typography} from "@mui/material"
import { styled, useTheme } from '@mui/material/styles';

import PropTypes from 'prop-types';
import ImageBoxDesenvolvimento from "../../assets/digital-cyberspace-data-network-connections.jpg"

const BoxInicio= styled(Box)(({ theme }) => ({
    width: "100%",
    marginTop: 100,
    display: "flex",
    flexDirection: "Column",
    justifyContent: "center",
    alignItems: "center",
    
  }));

  const BoxDesktop= styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.up('xl')]: {
      display: "none",
    }
    
  }));
  const BoxOthersConfigs= styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down('xl')]: {
      display: "none",
    }
    
  }));






  const BoxTabs= styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
      }
  }));
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

function Solucoes() {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  


  return (
    <BoxInicio >
       
          <BoxDesktop>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
              sx={{

                
              "& button:hover": {backgroundColor: "#C4F015"},
              "& button:active": {backgroundColor: "#C4F015"},
              "& button:focus": {backgroundColor: "#C4F015"},
              "& button.Mui-selected": {backgroundColor: "#C4F015", color: "black"},
              }}
              
            >
              <Tab label="Desenvolvimento de Apps e software" sx={{color: "Black",background: "rgba(0,0,0,0.1)", width: "100%", maxWidth: {sm: 300}, margin: 1, fontWeight: 800, fontSize: 16}}/>
              <Tab label="Automação RPA" sx={{color: "Black",background: "rgba(0,0,0,0.1)", width: "100%",                     maxWidth: {sm: 300},  margin: 1, fontWeight: 800, fontSize: 16}} />
              <Tab label="Integrações de software"  sx={{color: "Black",background: "rgba(0,0,0,0.1)", width: "100%",          maxWidth: {sm: 300},  margin: 1, fontWeight: 800, fontSize: 16}}/>
              <Tab label="Design ux e Ui" sx={{color: "Black",background: "rgba(0,0,0,0.1)", width: "100%",                    maxWidth: {sm: 300}, margin: 1, fontWeight: 800, fontSize: 16}}/>
        
            </Tabs>
          </BoxDesktop>

          <BoxOthersConfigs>
          <Tabs
              value={value}
              onChange={handleChange}
              
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
              sx={{display: {sm: "none" , md: "none", xl: "flex", width: "90%" ,
            
              
              "& button:hover": {backgroundColor: "#C4F015"},
              "& button:active": {backgroundColor: "#C4F015"},
              "& button:focus": {backgroundColor: "#C4F015"},
              "& button.Mui-selected": {backgroundColor: "#C4F015", color: "black"},
          
            }}}
          >
            <Tab label="Desenvolvimento de Apps e software" sx={{padding: 3,color: "Black",background: "rgba(0,0,0,0.1)",  fontWeight: 800, fontSize: 16}}/>
            <Tab label="Automação RPA" sx={{padding: 3,color: "Black",background: "rgba(0,0,0,0.1)",                    marginLeft: 1, fontWeight: 800, fontSize: 16}} />
            <Tab label="Integrações de software"  sx={{padding: 3,color: "Black",background: "rgba(0,0,0,0.1)",            marginLeft: 1, fontWeight: 800, fontSize: 16}}/>
            <Tab label="Design ux e Ui" sx={{padding: 3,color: "Black",background: "rgba(0,0,0,0.1)",                    marginLeft: 1, fontWeight: 800, fontSize: 16}}/>
      
          </Tabs>
          </BoxOthersConfigs>

        <Box
     
       
        sx={{background: "rgba(0,0,0,0.05)", width: "90%", marginTop: 5 , height: "100%"}}
      >

          <CustomTabPanel value={value} index={0} dir={theme.direction}>
            <BoxTabs >
              <Box margin={3}>
                <Box
                  component="img"
                  sx={{
                    height: "100%",
                    maxHeight: { xl: 500 , md: 250, sm: "100%" },
                    width: 300,
                    maxWidth: { xl: 300, md: 250, sm: 150 },
                    borderRadius: 5
                  }}
                  alt="The house from the offer."

                  src={ImageBoxDesenvolvimento}
                />
              </Box>

              <Box margin={3} sx={{
                    
                    width: "100%"
                    

                  }}>
                  <Typography 
                  sx={{ color: "black",letterSpacing: 1.3,
                  lineHeight:  1.8,
                  wordSpacing:  1.3, fontSize: 16, fontWeight: 500
                     }}
                  >Amplie seu alcance com maior presença digital e
                      saia na frente dos seus concorrentes.
                      Com o desenvolvimento de apps e software, você
                      agrega valor ao seu produto ou serviço, entrega
                      facilidade, melhora experiência para seus clientes e
                      garante maior fidelização. Desenvolva aplicações
                      personalizadas que atendam às suas necessidades
                      com especialistas em métodos ágeis e nasprincipais tecnologias do mercado
                  </Typography>
              </Box>

              <Box margin={3} sx={{
                  display: "flex", flexDirection: "column",
                    width: "100%",
                    
                  }}>
                <Typography sx={{background: "#C4F015", padding: 2, paddingTop: 4, paddingBottom:4,marginBottom: 4, color: "black", fontWeight: 800, fontSize: 17}} > 
                Conheça nossas Soluções:<br></br>
Desenvolvimento de Apps e Software</Typography>

                <Typography sx={{ marginBottom: 2, color: "black",letterSpacing: 1.3,
                    lineHeight:  1.8,
                    wordSpacing:  1.3, fontSize: 16, fontWeight: 500}}><span style={{fontWeight: 600}}>Mobile:</span> Desenvolvemos soluções para mobile, apps
intuitivos, pensado em designer e fáceis de usar,
além disso com ótima experiência de UI/UX</Typography>
                <Typography  sx={{ marginBottom: 2, color: "black",letterSpacing: 1.3,
                    lineHeight:  1.8,
                    wordSpacing:  1.3, fontSize: 16, fontWeight: 500}}><span style={{fontWeight: 600}}>Web:</span> Criação de diversos softwares para web ou
desktop, como CRM’s, ERP’s, voltado para mercado
financeiro, ou marktplace, um MVP, ou qualquer
outra necessidade de software. Podendo ser
também específico para back-end ou front-end.</Typography>
                <Typography  sx={{ marginBottom: 2,letterSpacing: 1.3,
                    lineHeight:  1.8,
                    wordSpacing:  1.3, color: "black", fontSize: 16, fontWeight: 500}}><span style={{fontWeight: 600}}>Web3 e blockchain:</span> Oferecemos também
consultoria e desenvolvimetno de aplicações
voltadas para WEB3, com foco em blockchain e/ou
criptomoedas, assim como criação de tokens, nfts,
etc..</Typography>
              </Box>
            </BoxTabs>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1} dir={theme.direction}>
          <BoxTabs >
              <Box margin={3}>
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    maxHeight: { xl: 500 , md: 250, sm: "100%" },
                    width: 500,
                    maxWidth: { xl: 300, md: 250, sm: 150 },
                    borderRadius: 5
                  }}
                  alt="The house from the offer."

                  src={ImageBoxDesenvolvimento}
                />
              </Box>

              <Box margin={3} sx={{
                    
                    width: "100%"
                    

                  }}>
                    <Typography sx={{ color: "black",letterSpacing: 1.3,
                  lineHeight:  1.8,
                  wordSpacing:  1.3, fontSize: 16, fontWeight: 500, marginBottom: 4
                     }}>Modernize a rotina da sua equipe com Automação
                    RPA, aumentando a eficiência e a qualidade de
                    tarefas que são realizadas manualmente e
                    repetidamente. Automatize as suas rotinas de
                    trabalho, em todos os níveis organizacionais e dê o
                    primeiro passo para robotização da sua empresa.
                    </Typography>

                  <Typography sx={{ color: "black",letterSpacing: 1.3,
                  lineHeight:  1.8,
                  wordSpacing:  1.3, fontSize: 16, fontWeight: 500
                     }}><span style={{fontWeight: 700}}> RPA: <br></br></span> partir da consultoria de automação RPA, nossos
                  especialistas em robotização desenham a melhor
                  solução de automação com foco nos objetivos de
                  negócio encontrando melhorias nos processos e
                  redução de custos. Criamos e implementamos
                  automatizações com qualquer plataforma de
                  mercado, obtendo o melhor custo de licença e
                  suporte. Além de fazer o monitoramento e suporte
                  de robôs legados ou novos, para garantir que tudo
                  está funcionando como planejado e mapear outras
                  oportunidades de melhoria.</Typography>
              </Box>

              <Box margin={3}sx={{
                    
                    display: "flex", flexDirection: "column",
                    width: "100%",
                    

                  }}>
                <Typography sx={{background: "#C4F015", padding: 2, paddingTop: 4, paddingBottom:4,marginBottom: 4, color: "black", fontWeight: 800, fontSize: 17}}>Beneficios:</Typography>

                <Typography sx={{ marginBottom: 2, color: "black",letterSpacing: 1.3,
                    lineHeight:  1.8,
                    wordSpacing:  1.3, fontSize: 16, fontWeight: 500}}><span style={{fontWeight: 600}}>MELHOR EXPERIÊNCIA DO CLIENTE</span><br></br>
Ganhe maior velocidade das operações, qualidade e
disponibilidade
</Typography>
                <Typography sx={{ marginBottom: 2, color: "black",letterSpacing: 1.3,
                    lineHeight:  1.8,
                    wordSpacing:  1.3, fontSize: 16, fontWeight: 500}}><span style={{fontWeight: 600}}>UMENTO DA AGILIDADE</span><br></br>
Produtividade de forma ininterrupta para 24×7</Typography>
                <Typography sx={{ marginBottom: 2, color: "black",letterSpacing: 1.3,
                    lineHeight:  1.8,
                    wordSpacing:  1.3, fontSize: 16, fontWeight: 500}}><span style={{fontWeight: 600}}>GANHOS DE EFICIÊNCIA OPERACIONAL</span><br></br>
Reduza custos com mão de obra entre 40% e 70%
em média
</Typography>
<Typography sx={{ marginBottom: 2, color: "black",letterSpacing: 1.3,
                    lineHeight:  1.8,
                    wordSpacing:  1.3, fontSize: 16, fontWeight: 500}}><span style={{fontWeight: 600}}>GARANTIA DE CONFORMIDADE</span><br></br>
Aumente a qualidade com redução de 100% dos
erros</Typography>
              </Box>
            </BoxTabs>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2} dir={theme.direction}>
            <BoxTabs >
              <Box margin={3}>
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    maxHeight: { xl: 500 , md: 250, sm: "100%" },
                    width: 500,
                    maxWidth: { xl: 300, md: 250, sm: 150 },
                    borderRadius: 5
                  }}
                  alt="The house from the offer."

                  src={ImageBoxDesenvolvimento}
                />
              </Box>

              <Box margin={3} sx={{width: "100%"}} >
                    <Typography sx={{ color: "black",letterSpacing: 1.3,
                  lineHeight:  1.8,
                  wordSpacing:  1.3, fontSize: 16, fontWeight: 500, marginBottom: 4
                     }}>Integrações entre softwares de uma forma fácil.
                    Podemos integrar quaisquer softwares com
                    qualquer tecnologia</Typography>
                    <Typography sx={{ color: "black",letterSpacing: 1.3,
                  lineHeight:  1.8,
                  wordSpacing:  1.3, fontSize: 16, fontWeight: 500, marginBottom: 4
                     }}><span style={{fontWeight: 700}}>Exemplos de integrações</span><br></br>
                    Envio de relatórios de um sitema ERP para BI<br></br>
                    Envio de relatórios de CRM para Google Sheeets<br></br>
                    Integrar um ERP com um CRM<br></br>
                    Integrar um sistema bancário com outro sistema<br></br>
                    bancário<br></br>
                    Integrar métodos de pagamentos<br></br>
                    Integrar um chatbot com um outro sistema<br></br></Typography>
                    <Typography sx={{ color: "black",letterSpacing: 1.3,
                  lineHeight:  1.8,
                  wordSpacing:  1.3, fontSize: 16, marginBottom: 4,


                  background: "#C4F015", padding: 2, paddingTop: 4, paddingBottom:4, color: "black", fontWeight: 800


                     }}>Faça integrações de software
                    em 3 etapas simples.
                    </Typography>

              </Box>

              <Box margin={3} sx={{width: "100%"}}>
                <Typography  sx={{ color: "black",letterSpacing: 1.3,
                  lineHeight:  1.8,
                  wordSpacing:  1.3, fontSize: 16, fontWeight: 500, marginBottom: 4
                     }}><span style={{fontWeight: 700}}>1. Escolha o software de origem e destino</span><br></br>
A Botgeek pode integrar qualquer software com
outro software, diferentes tipos de softwares, com
diferentes métodos de conexão entre elas.<br></br>
-Não se preocupe se é por Rest Api, SOAP,
webhook, Google Sheets<br></br>
- Pode ser CRM, ERP, BI, chatbot, ou outro software<br></br>
- Automatize seus processos e saia do manual</Typography>

                <Typography sx={{ color: "black",letterSpacing: 1.3,
                  lineHeight:  1.8,
                  wordSpacing:  1.3, fontSize: 16, fontWeight: 500, marginBottom: 4
                     }}><span style={{fontWeight: 700}}>2. Defina o objetivo</span><br></br>
Defina qual o objetivo de sua integração, que pode
ser desde facilitar um pequeno processo que é feito
manualmente até automatizar grandes tarefas e
processos.
A. Defina o que deseja integrar
B. Quais dados deseja enviar para o outro sistema
C. Ou, qual tarefa deve ser automatizada
</Typography>
                <Typography sx={{ color: "black",letterSpacing: 1.3,
                  lineHeight:  1.8,
                  wordSpacing:  1.3, fontSize: 16, fontWeight: 500, marginBottom: 4
                     }}><span style={{fontWeight: 700}}>3. Deixe conosco</span><br></br>
- Deixe conosco. Você chegou ao lugar certo, entre
em contato e em poucos minutos te passaremos
um orçamento sobre sua integração, rápido e fácil</Typography>
              </Box>
            </BoxTabs>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={3} dir={theme.direction}>
          <BoxTabs >
              <Box margin={3}>
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    maxHeight: { xl: 500 , md: 250, sm: "100%" },
                    width: 500,
                    maxWidth: { xl: 300, md: 250, sm: 150 },
                    borderRadius: 5
                  }}
                  alt="The house from the offer."

                  src={ImageBoxDesenvolvimento}
                />
              </Box>

              <Box margin={3} sx={{width: "100%"}}>
                    <Typography  sx={{ color: "black",letterSpacing: 1.3,
                  lineHeight:  1.8,
                  wordSpacing:  1.3, fontSize: 16, fontWeight: 500, marginBottom: 4
                     }}>Somos uma equipe de profissionais apaixonados
por design, especializados em criar experiências
excepcionais para os usuários. Oferecemos serviços
abrangentes de design, abrangendo as áreas de
design de interface do usuário (UI) e design de
experiência do usuário (UX).
</Typography>
                    <Typography  sx={{ color: "black",letterSpacing: 1.3,
                  lineHeight:  1.8,
                  wordSpacing:  1.3, fontSize: 16, fontWeight: 500, marginBottom: 4
                     }}>O design é uma parte fundamental de qualquer
projeto, pois influencia diretamente a forma como
as pessoas interagem e se envolvem com um
produto ou serviço.</Typography >

                    <Typography  sx={{ color: "black",letterSpacing: 1.3,
                  lineHeight:  1.8,
                  wordSpacing:  1.3, fontSize: 16, fontWeight: 500, marginBottom: 4
                     }}>Quando se trata de UX, colocamos o usuário no
centro de tudo o que fazemos. Realizamos
pesquisas aprofundadas para compreender o seu
público-alvo, suas expectativas e desejos.</Typography>
              </Box>

              <Box margin={3} sx={{display: "flex", flexDirection: "column", width: "100%"}}>
                <Typography
                   sx={{ color: "black",letterSpacing: 1.3,
                   lineHeight:  1.8,
                   wordSpacing:  1.3, fontSize: 16, fontWeight: 500, marginBottom: 4
                      }}
                >Por outro lado, o design de interface do usuário (UI)
                  é responsável por criar a estética visual de um
                  produto ou serviço. Utilizamos nossa expertise em
                  design gráfico e habilidades técnicas para criar
                  interfaces visualmente atraentes e com uma
                  identidade única.
                </Typography>

                <Typography  sx={{ color: "black",letterSpacing: 1.3,
                  lineHeight:  1.8,
                  wordSpacing:  1.3, fontSize: 16, fontWeight: 500, marginBottom: 4
                     }}>Nosso objetivo é criar designs que não apenas
                sejam visualmente agradáveis, mas também
                eficazes na transmissão da sua mensagem e no
                engajamento dos usuários.
                </Typography>
                <Typography  sx={{ color: "black",letterSpacing: 1.3,
                  lineHeight:  1.8,
                  wordSpacing:  1.3, fontSize: 16, fontWeight: 500, marginBottom: 4
                     }}>Entre em contato conosco hoje mesmo para
                  discutir suas ideias e descobrir como podemos
                  ajudar a transformá-las em realidade. Estamos
                  ansiosos para colaborar com você e tornar seu
                  projeto um sucesso!
                </Typography>
              </Box>
            </BoxTabs>
          </CustomTabPanel>

      </Box>
    </BoxInicio>
  );
}

export default Solucoes;



