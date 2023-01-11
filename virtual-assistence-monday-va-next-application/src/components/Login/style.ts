import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100vh;
    @media (min-width: 768px) {
        
    }
`
export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 75%;
    left: 0px;
    background: #003D7B;
    padding: 0 10vh 0 10vh;
    @media (min-width: 768px) {
        margin-bottom: 5%;
        height: 60%;
    }
`
export const LogoLogin = styled.img`
    position: absolute;
    width: 100px;
    height: 100px;
    top: 20%;
    @media (min-width: 390px) {
        top: 10%;
        width: 200px;
        height: 200px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
` 
export const AppName = styled.h1`
    font-family: 'Gill Sans MT';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 46px;
    letter-spacing: -0.05em;
    margin-bottom: 3px;

    color: #FFFFFF;
    @media (min-width: 768px) {
        
    }
`
export const AppSubTitle = styled.h2`
    font-family: 'Genos';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.08em;
    margin-bottom: 13;

    color: #FFFFFF;
    @media (min-width: 768px) {
        
    }
`
export const FormLogin = styled.form`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;

    @media (min-width: 768px) {
        
    }
`
export const InputField = styled.input`
    width: 222px;
    height: 33px;
    left: 69px;
    top: 392px;
    border: 1px solid #FFFFFF;
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
    ::placeholder{
        font-family: 'Georama';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: rgba(0, 61, 123, 0.6);
    }
    @media (min-width: 768px) {
        
    }
`
export const ErroMessage = styled.p`
    @media (min-width: 768px) {
        
    }
`
export const LoginButton = styled.button`
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
    @media (min-width: 768px) {
        
    }
`
export const RegisterLink = styled.a`
    cursor: pointer;
    font-family: 'Georama';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin-top: 33px;
    @media (min-width: 768px) {
        
    }
`
