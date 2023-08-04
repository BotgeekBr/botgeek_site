import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import Inicio from "./inicio"
import Header from "../components/header";
import Solucoes from "./solucoes"
import Sobre from "./sobre"
import Contato from "./contato"
import Clientes from "./clientes";
import Footer from '../components/footer'

const BoxInicio = styled(Box)(({ theme }) => ({}));

function PageHome() {
  const [isScrolling, setIsScrolling] = useState(false);
  const sections = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'];

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
        const scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 1000); // Defina aqui o tempo que deseja esperar após a rolagem automática parar antes de ativá-la novamente
        return () => clearTimeout(scrollTimeout);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling]);

  useEffect(() => {
    if (isScrolling) {
      const scrollInterval = setInterval(scrollToNextSection, 5000); // Rolará para a próxima seção a cada 5 segundos
      return () => {
        clearInterval(scrollInterval);
      };
    }
  }, [isScrolling]);

  const scrollToNextSection = () => {
    const currentIndex = sections.findIndex((section) => {
      const element = document.getElementById(section);
      return element && element.getBoundingClientRect().top >= 0;
    });

    if (currentIndex !== -1 && currentIndex < sections.length - 1) {
      const nextSection = document.getElementById(sections[currentIndex + 1]);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsScrolling(false);
    }
  };

  return (
    <BoxInicio>
      <Header id="" />
      <div className="section" id="section1">
        <Inicio />
      </div>
      <div className="section" id="section2">
        <Sobre />
      </div>
      <div className="section" id="section3">
        <Solucoes />
      </div>
      <div className="section" id="section4">
        <Clientes />
      </div>
      <div className="section" id="section5">
        <Contato />
      </div>
      <div className="section" id="section6">
        <Footer />
      </div>
    </BoxInicio>
  );
}

export default PageHome;
