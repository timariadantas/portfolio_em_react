import styled from "styled-components";

export const StyleHeader = styled.header`
    display: flex;
    justify-content: space-between;
    height: 20vh;
    align-items: center;
    width: 100%;

    @media (max-width: 800px) {
        justify-content: space-around;
        align-items: center;
        height: 12vh;
        
    }
`;

export const Img = styled.img`
    width: 7vw;
    height: 50%;
    margin-left: 50px;
    margin-bottom: 15px;

    @media (max-width: 800px){
        
        width: 20vw;
        margin-bottom: 30px;

         
    }
    `;

export const Navegacao = styled.ul`
    display: flex;
    list-style: none;
    width: 40vw;
    justify-content: space-evenly;
    margin-bottom: 30px;
   

        @media (max-width: 500px){
            justify-content: center;
            width: 100%;
            justify-content: left;
            


        }

    a{
        text-decoration:none;
        color: #828282;
    }
`;

export const Menu = styled.li`
    font-size: 18px;

    @media (max-width: 800px){
       
        font-size: 20px;
        padding: 5px;
    }
    
`;