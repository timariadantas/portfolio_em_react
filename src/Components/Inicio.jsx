import React from "react";
import Foto from "../assets/desenho-perfil.png";
import LogoLinkedin from "../assets/linkedin2.svg";
import LogoEmail from "../assets/envelope-simple.svg";
import LogoGithub from "../assets/github-logo.svg";
import LogoWhatszaap from "../assets/whatsapp-logo (1).svg";
import * as S from "../Styles/InicioStyled";

function Inicio() {
  return (
    <S.Main>
      <S.Section>
        <S.H1>Olá , sou Maria Dantas</S.H1>
        <S.H2>Desenvolvedora | Front End</S.H2>

        <S.Div>
          <a href="https://github.com/timariadantas" target="_blank">
            <img src={LogoGithub} alt="simbolo da logo github" />
          </a>

          <a href="https://www.linkedin.com/in/mariadantasti/" target="_blank">
            <img src={LogoLinkedin} alt="simbolo da logo linkedin" />
          </a>

          <a href="https://criarmeulink.com.br/u/1701624688" target="_blank">
            <img src={LogoEmail} alt="simbolo da logo do email" />{" "}
          </a>

          <a href="https://wa.me/5521968861465" target="_blank">
            <img src={LogoWhatszaap} alt="simbolo da logo do whatzapp" />
          </a>
        </S.Div>
      </S.Section>

      <figure>
        <S.Img src={Foto} alt="foto da Maria" />
      </figure>
    </S.Main>
  );
}

export default Inicio;
