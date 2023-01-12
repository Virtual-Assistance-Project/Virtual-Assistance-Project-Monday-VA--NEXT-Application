import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 40%;

    margin-top: 30px;

    .calender-today {
        display: flex;
        justify-content: center;
        align-items: center;

        .day {
            font-weight: 700;
            font-size: 30px;
            line-height: 36px;
            letter-spacing: -0.05em; 
            color: #003D7B;
        }

        .mark {
            width: 7px;
            height: 6px;
            background: #C73C3C;

            border-radius: 50%;

            margin: 0 10px 0 10px;
        }
    }
    ul {
        display: flex;
        justify-content: space-between;

        width: 100%;

        li {
            font-weight: 700;
            font-size: 30px;
            line-height: 36px;
            letter-spacing: -0.05em;

            color: rgba(0, 0, 0, 0.5);
        }

    }
`