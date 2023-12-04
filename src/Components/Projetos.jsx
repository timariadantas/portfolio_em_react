import React from "react";
import Figma from "../assets/figma.png";
import Calculadora from "../assets/calculadora1.png";
import JogoMemoria from "../assets/jogo_memoria.png";
import CardProjetos from "./CardProjetos";
import * as S from "../Styles/CardProjetosStyled";
import LogoGithub from "../assets/github-logo.svg";
import LogoLinkedin from "../assets/linkedin2.svg";
import Simbolos from "../assets/simbolos.png";

const Projetos = () => {
  const [projeto, setProjeto] = React.useState([
    {
      imagem: Figma,
      descricao: "Projeto feito no Figma",
    },
    {
      imagem: Calculadora,
      descricao: "Projeto feito em React",
    },
    {
      imagem: JogoMemoria,
      descricao: "Projeto feito em Javascript",
    },
  ]);

  return (
    <section>
      <S.Titulo>Meus Projetos</S.Titulo>

      <S.DivLink>
        <a href="https://github.com/timariadantas" target="_blank">
          <img src={LogoGithub} alt="" />
        </a>

        <a href="https://www.linkedin.com/in/mariadantasti/" target="_blank">
          <img src={LogoLinkedin} alt="" />
        </a>
      </S.DivLink>

      <S.Div1>
        {projeto.map((projetos) => {
          return (
            <CardProjetos
              img={projetos.imagem}
              descricao={projetos.descricao}
            />
          );
        })}
      </S.Div1>

      <S.Simbolo>
        <figure>
          <img
            src={Simbolos}
            alt="simbolo da logo das tecnologia html, css , javascript e react"
          />
        </figure>
      </S.Simbolo>
    </section>
  );
};

export default Projetos;
