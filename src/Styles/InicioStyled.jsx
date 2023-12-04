import styled from "styled-components";


export const Main = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
   
    margin: 0 auto;
;
    @media (max-width: 800px){
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        width: 100%;
        height: 100%;
        justify-content: center;
       

    }
  

`;
export const Img = styled.img`
    display: flex;
    width: 100%;
    flex-direction: left;
    margin-bottom: 60px;

    @media (max-width : 800px){
        height: 25vh;
        width: 100%;
        

    }
`;


export const H1 = styled.h1`
    display: flex;
    color: #f9f9f9;
    font-size: 36px;

    @media (max-width: 800px){
    text-align: justify;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin: 0 auto;
    }
    
`;

export const H2 = styled.h2`
    display: flex;
    color: #828282;

    @media (max-width: 800px){
    justify-content:center;
    font-size: 24px;
    }
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    gap: 2px;
    padding: 5px;
    
    a{
        text-decoration: none;
        color:#DE3B84;
        display: flex;
        justify-content: center;
        gap: 16px;
        text-align: center;
        font-size: 20px;
        border: 2px solid;
        padding: 5px ;
        

        @media (max-width: 800px){
            gap: 10px;
        }

    }
`;


export const Section = styled.section`
    justify-content: center;

    @media (max-width: 800px){
        justify-content: center;
        
    }
`;


















// quando for import la no inicio.jsx 
// colocar import {nome das tags estilazadas} from "../Styles/InicioStyles.jsx"