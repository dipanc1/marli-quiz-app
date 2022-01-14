import styled, { createGlobalStyle } from "styled-components";
import BGImage from './images/bg.jpg';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
    color: #fff;
    font-size: 2rem;
}

.score{
    color: #fff;
    font-size: 2rem;
    margin: 0;
}

h1{
    font-family: 'Kaushan Script', cursive;
    background-image: linear-gradient(180de, #fff, #03D2BD);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: #03D2BD;
    -moz-background-clip: text;
    -moz-text-fill-color: #03D2BD;
    filter: drop-shadow(0 0 0.75rem #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align:center;
    margin: 20px;
    transition: 5s ease-in-out infinite alternate;
}

.start, .next{
    cursor: pointer;
    background: linear-gradient(360deg, #fff, #03D2BD);
    border: 2px solid #0085a3;
    box-shadow: 0px 5px 10px #0085a3;
    border-radius: 5px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: 24px;
}

.start{
    max-width: 200px;
}


`;


export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}

body{
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

*{
    font-family: 'Indie Flower', cursive;
    box-sizing: border-box';
}
`;
