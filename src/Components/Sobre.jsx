import React from "react";
import Maria from "../assets/maria.png";
import LogoGithub from "../assets/github-logo.svg";
import Linkedin from "../assets/linkedin2.svg";
import * as S from "../Styles/SobreStyled";

function Sobre() {
  return (
    <S.Section>
      <figure>
        <S.Img src={Maria} alt="foto de perfil da Maria" />
      </figure>
      <S.H1> Maria Dantas | Dev. Front-End</S.H1>
      <S.DivLogo>
        <a href="https://github.com/timariadantas" target="_blank">
          <img src={LogoGithub} alt="simbolo da logo github" />
        </a>

        <a href="https://www.linkedin.com/in/mariadantasti/" target="_blank">
          <img src={Linkedin} alt="simbolo da logo linkedin" />
        </a>
      </S.DivLogo>

      <S.DivP>
        <p>
          Estudante tecnologia em busca de oportunidades para aprender e crescer
          na área. Atualmente, estou cursando Programação Web e estou
          entusiasmado em adquirir conhecimentos e habilidades que me permitam
          contribuir para o mundo da tecnologia.
        </p>

        <p> Concluido curso Javascript - React : Vai na Web</p>
        <p> Cursando Mentoria de Node.js - React : Invest-Tools</p>
        <p> Cursando Javascript e React : Origamid </p>
        <p> Concluído curso Design UI/UX : Firjan Senai</p>
      </S.DivP>
    </S.Section>
  );
}

export default Sobre;
