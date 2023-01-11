import styled from "styled-components";

export const FullScreen = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const TitleRegister = styled.h1`
margin-top: 150px;
display: flex;
justify-content: center;
width: 100%;
font-family: 'Gill Sans MT';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 42px;
letter-spacing: -0.05em;
color: #020052;
`

export const ChatFormContainer = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const ChatQuestionsContainer = styled.div`
margin-top: 50px;
width: 772px;
min-height: 148px;
background: #020052;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5vh 15vh;
`

export const InputAnswer = styled.input`
background: #FFFFFF;
border-radius: 10px;
border: none;
width: 419px;
height: 30px;
margin: 10px 0 20px 0;
`

export const BotMessages = styled.a`
font-family: 'Georama';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 30px;

color: #FFFFFF;
`

export const ButtonNext = styled.button`
width: 124px;
height: 33px;
margin: auto;
border: 1px solid #007FFF;
background: #007FFF;
border-radius: 10px;
margin-top: 33px;
cursor: pointer;
a{
    font-family: 'Georama';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: 0.02em;

    color: #003D7B;
}
`