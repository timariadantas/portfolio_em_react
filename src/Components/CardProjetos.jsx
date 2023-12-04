import React from "react";
import * as S from "../Styles/CardProjetosStyled";

const CardProjetos = ({ img, descricao }) => {
  return (
    <S.Section>
      <S.Div>
        <figure>
          <S.Img src={img} alt="" />
        </figure>

        <h2> {descricao} </h2>
      </S.Div>
    </S.Section>
  );
};

export default CardProjetos;
