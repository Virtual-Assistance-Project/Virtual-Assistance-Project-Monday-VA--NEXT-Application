import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 100%;

    .over-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        width: 100%;

        .add {
            width: 10%;
            height: auto;

            img{
                width: 100%;
                height: auto;
            }
        }

        .header-profile{
            width: 20%;
            height: auto;
        }

    }

    h1 {
        color: #003D7B;
        }

    span {
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: -0.05em;

        color: #003D7B;
    }

`