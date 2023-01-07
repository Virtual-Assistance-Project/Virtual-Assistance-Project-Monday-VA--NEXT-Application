import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #007FFF;

    padding: 10vh;

    height: 100vh;

    h1{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;

        font-size: 5vw;
        font-weight: 600;
        color: #FFFF;
    }

    span {
        
        display: flex;
        justify-content: center;

        width: 100vw;
        
        font-size: 2.5vw;
        font-weight: 400;
        font-size: 100%;
        line-height: 43px;
        text-align: center;
        letter-spacing: 0.08em;

        color: #FFFFFF; 
    }

    img{
        width: 900%;
        height: 50%;
    }
`