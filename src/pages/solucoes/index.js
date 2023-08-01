import React, { useState } from "react";
import {Box, Tab, Tabs, Typography} from "@mui/material"
import { alpha,styled, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import backgroundImagePage from "../../assets/technology-background-abstract-digital-technology-network-background-illustration-futuristic-point-wave.jpg"
import PropTypes from 'prop-types';
import SwipeableViews from "react-swipeable-views";
import ImageBoxDesenvolvimento from "../../assets/digital-cyberspace-data-network-connections.jpg"

const BoxInicio= styled(Box)(({ theme }) => ({
    width: "100%",
   
    background: "white",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "Column",
    justifyContent: "center",
    alignItems: "center",
    
  }));
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
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
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
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
        <Box sx={{ maxWidth: "100%", bgcolor: 'background.paper' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab label="Desenvolvimento e Apps e software" sx={{color: "Black",background: "rgba(0,0,0,0.1)", width: 300, margin: 1, fontWeight: 800, fontSize: 16}}/>
            <Tab label="Automação RPA" sx={{color: "Black",background: "rgba(0,0,0,0.1)", width: 300, margin: 1, fontWeight: 800, fontSize: 16}} />
            <Tab label="Integrações de software"  sx={{color: "Black",background: "rgba(0,0,0,0.1)", width: 300, margin: 1, fontWeight: 800, fontSize: 16}}/>
            <Tab label="Design ux e Ui" sx={{color: "Black",background: "rgba(0,0,0,0.1)", width: 300, margin: 1, fontWeight: 800, fontSize: 16}}/>
      
          </Tabs>
        </Box>  


        <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{background: "rgba(0,0,0,0.1)", width: "100%", maxWidth: 1250, marginTop: 10 }}
      >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Box sx={{display: "flex", flexDirection: "row"}}>
              <Box margin={2}>
                <Box
                  component="img"
                  sx={{
                    height: "100%",
                    width: 500,
                    maxWidth: { xs: 350, md: 250, sm: 150 },
                    borderRadius: 5
                  }}
                  alt="The house from the offer."

                  src={ImageBoxDesenvolvimento}
                />
              </Box>

              <Box margin={2}>
                    <Typography>Amplie seu alcance com maior presença digital e
saia na frente dos seus concorrentes.
Com o desenvolvimento de apps e software, você
agrega valor ao seu produto ou serviço, entrega
facilidade, melhora experiência para seus clientes e
garante maior fidelização. Desenvolva aplicações
personalizadas que atendam às suas necessidades
com especialistas em métodos ágeis e nas
principais tecnologias do mercado</Typography>
              </Box>

              <Box margin={2}>
                <Typography>Conheça nossas Soluções:
Desenvolvimento de Apps e Software</Typography>

                <Typography>Mobile: Desenvolvemos soluções para mobile, apps
intuitivos, pensado em designer e fáceis de usar,
além disso com ótima experiência de UI/UX</Typography>
                <Typography>Web: Criação de diversos softwares para web ou
desktop, como CRM’s, ERP’s, voltado para mercado
financeiro, ou marktplace, um MVP, ou qualquer
outra necessidade de software. Podendo ser
também específico para back-end ou front-end.</Typography>
                <Typography>Web3 e blockchain: Oferecemos também
consultoria e desenvolvimetno de aplicações
voltadas para WEB3, com foco em blockchain e/ou
criptomoedas, assim como criação de tokens, nfts,
etc..</Typography>
              </Box>
            </Box>
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
          <Box sx={{display: "flex", flexDirection: "row"}}>
              <Box margin={2}>
                <Box
                  component="img"
                  sx={{
                    height: "100%",
                    width: 500,
                    maxWidth: { xs: 350, md: 250, sm: 150 },
                    borderRadius: 5
                  }}
                  alt="The house from the offer."

                  src={ImageBoxDesenvolvimento}
                />
              </Box>

              <Box margin={2}>
                    <Typography>Modernize a rotina da sua equipe com Automação
RPA, aumentando a eficiência e a qualidade de
tarefas que são realizadas manualmente e
repetidamente. Automatize as suas rotinas de
trabalho, em todos os níveis organizacionais e dê o
primeiro passo para robotização da sua empresa.</Typography>

<Typography>RPA</Typography>

<Typography> partir da consultoria de automação RPA, nossos
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

              <Box margin={2}>
                <Typography>Beneficios:</Typography>

                <Typography>MELHOR EXPERIÊNCIA DO CLIENTE
Ganhe maior velocidade das operações, qualidade e
disponibilidade
</Typography>
                <Typography>"UMENTO DA AGILIDADE
Produtividade de forma ininterrupta para 24×7</Typography>
                <Typography>GANHOS DE EFICIÊNCIA OPERACIONAL
Reduza custos com mão de obra entre 40% e 70%
em média
</Typography>
<Typography>GARANTIA DE CONFORMIDADE
Aumente a qualidade com redução de 100% dos
erros</Typography>
              </Box>
            </Box>
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
          <Box sx={{display: "flex", flexDirection: "row"}}>
              <Box margin={2}>
                <Box
                  component="img"
                  sx={{
                    height: "100%",
                    width: 500,
                    maxWidth: { xs: 350, md: 250, sm: 150 },
                    borderRadius: 5
                  }}
                  alt="The house from the offer."

                  src={ImageBoxDesenvolvimento}
                />
              </Box>

              <Box margin={2}>
                    <Typography>Integrações entre softwares de uma forma fácil.
Podemos integrar quaisquer softwares com
qualquer tecnologia</Typography>
<Typography>Exemplos de integrações
Envio de relatórios de um sitema ERP para BI
Envio de relatórios de CRM para Google Sheeets
Integrar um ERP com um CRM
Integrar um sistema bancário com outro sistema
bancário
Integrar métodos de pagamentos
Integrar um chatbot com um outro sistema</Typography>
<Typography>Faça integrações de software
em 3 etapas simples.
</Typography>

              </Box>

              <Box margin={2}>
                <Typography>. Escolha o software de origem e destino
A Botgeek pode integrar qualquer software com
outro software, diferentes tipos de softwares, com
diferentes métodos de conexão entre elas.
-Não se preocupe se é por Rest Api, SOAP,
webhook, Google Sheets
- Pode ser CRM, ERP, BI, chatbot, ou outro software
- Automatize seus processos e saia do manual</Typography>

                <Typography>2. Defina o objetivo
Defina qual o objetivo de sua integração, que pode
ser desde facilitar um pequeno processo que é feito
manualmente até automatizar grandes tarefas e
processos.
A. Defina o que deseja integrar
B. Quais dados deseja enviar para o outro sistema
C. Ou, qual tarefa deve ser automatizada
</Typography>
                <Typography>3. Deixe conosco
- Deixe conosco. Você chegou ao lugar certo, entre
em contato e em poucos minutos te passaremos
um orçamento sobre sua integração, rápido e fácil</Typography>
              </Box>
            </Box>
          </TabPanel>

          <TabPanel value={value} index={3} dir={theme.direction}>
          <Box sx={{display: "flex", flexDirection: "row"}}>
              <Box margin={2}>
                <Box
                  component="img"
                  sx={{
                    height: "100%",
                    width: 500,
                    maxWidth: { xs: 350, md: 250, sm: 150 },
                    borderRadius: 5
                  }}
                  alt="The house from the offer."

                  src={ImageBoxDesenvolvimento}
                />
              </Box>

              <Box margin={2}>
                    <Typography>Somos uma equipe de profissionais apaixonados
por design, especializados em criar experiências
excepcionais para os usuários. Oferecemos serviços
abrangentes de design, abrangendo as áreas de
design de interface do usuário (UI) e design de
experiência do usuário (UX).
</Typography>
                    <Typography>O design é uma parte fundamental de qualquer
projeto, pois influencia diretamente a forma como
as pessoas interagem e se envolvem com um
produto ou serviço.</Typography>
                    <Typography>Quando se trata de UX, colocamos o usuário no
centro de tudo o que fazemos. Realizamos
pesquisas aprofundadas para compreender o seu
público-alvo, suas expectativas e desejos.</Typography>
              </Box>

              <Box margin={2}>
                <Typography>Por outro lado, o design de interface do usuário (UI)
é responsável por criar a estética visual de um
produto ou serviço. Utilizamos nossa expertise em
design gráfico e habilidades técnicas para criar
interfaces visualmente atraentes e com uma
identidade única.
</Typography>
                <Typography>Nosso objetivo é criar designs que não apenas
sejam visualmente agradáveis, mas também
eficazes na transmissão da sua mensagem e no
engajamento dos usuários.</Typography>
                <Typography>Entre em contato conosco hoje mesmo para
discutir suas ideias e descobrir como podemos
ajudar a transformá-las em realidade. Estamos
ansiosos para colaborar com você e tornar seu
projeto um sucesso!</Typography>
              </Box>
            </Box>
          </TabPanel>
      </SwipeableViews>
    </BoxInicio>
  );
}

export default Solucoes;



