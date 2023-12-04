import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../Styles/HeaderStyled";
import Logo from "../assets/maria-logo.png";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <S.StyleHeader>
      <figure>
        <S.Img src={Logo} alt="imagem da logo" />
      </figure>
      <nav>
        <S.Navegacao>
          <S.Menu>
            {" "}
            <Link to="/">Inicio</Link>
          </S.Menu>
          <S.Menu>
            <Link to="sobre">Sobre</Link>
          </S.Menu>
          <S.Menu>
            <Link to="projetos">Projetos</Link>
          </S.Menu>
        </S.Navegacao>
      </nav>
    </S.StyleHeader>
  );
}

export default Header;
