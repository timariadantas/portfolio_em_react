import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  width: 100%;
  border-radius: 15px;
`;

export const Div1 = styled.section`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const DivLink = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const Div = styled.div`
  color: #828282;
  font-size: 14px;
  //width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
  border: 1px solid #828282;
  border-radius: 2px;
`;

export const Img = styled.img`
  position: relative;
  height: 20vh;
  bottom: 20px;
`;

export const Titulo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #de3b84;
`;

export const Simbolo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;
`;
