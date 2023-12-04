import styled from 'styled-components';

export const Section = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: 30px;

    @media (max-width: 800px){
        height: 100%;
       
        
    }

`;

export const H1 = styled.h1`
    display: flex;
    color: #797979;
    font-size: 32px;

    @media (max-width: 800px){
    justify-content: center;
    font-size: 24px;

    }
`;


export const Img = styled.img`
    display: flex;
    width: 50wh;
    height: 300px;
    margin-bottom: 30px; 

    @media (max-width: 800px){
        width: 100%;
        height: 20vh;

    }

`; 

export const DivP = styled.div`
    color: #828282;
    justify-content: center;
    text-align: justify;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    font-size: 1.5rem;


    @media (max-width: 800px){
        justify-content: center;
        text-align: start;
        width: 75vw;

    }
    


`;

export const DivLogo = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 200px;
    padding: 10px;

    
    @media (max-width:800px){
        display: flex;
        justify-content: space-evenly;
        width: 200px;
        
        
        
    }
    
`;