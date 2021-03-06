import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 700px;
    background: #ebfeff;
    border radius: 10px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0px 5px 10px #0085a3;
    text-align: center;
    p{
        font-size: 1em;
    }
    `

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;
    
    :hover{
        opacity: 0.8;
    }
    
    button{
        cursor: pointer;
        user-select: none;
        font-size: 1.2rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({correct, userClicked}) =>
            correct
            ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
            : !correct && userClicked
            ? 'linear-gradient(90deg, #ff5656, #c16868)'
            : 'linear-gradient(90deg, #03D2BD, #0085a3)'};
        border: 3px solid #fff;
        box-shadow: 0px 5px 10px #0085a3;
        border-radius: 5px;
        color: white;
        text-shadow: 0px 1px 0px #0085a3;
    }
    `