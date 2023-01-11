import styled from "styled-components"

export const Container = styled.li`
    display: flex;
    justify-content: space-around;

    padding: 10px;

    width: 100%;
    height: 150px;


    background: #007FFF;

    border-radius: 21px;

    .card-datetime{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-wrap: wrap;

        width: 20px;
        height:100%;

        .card-datetime__over{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;

            width: 20px;
        }

        .line{
            width: 0px;
            height: 40px;

            border: 0.5px solid #FFFFFF;  

            margin: 0 auto;
        }

        .card-datetime__down{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;

            width: 20px;
        }
    }

    .card-content{
        display: flex;
        flex-direction: column;

        height: 100%;
        width: 80%;

        .card-content__title{
            font-weight: 400;
            font-size: 50px;
            line-height: 50px;
    
            color: #020052;
        }

        .card-type{
            margin-left: 30px;
            color: #FFFFFF;
        }

        .card-content__houver{
            display: flex;
            align-items: center;
            justify-content: space-around;
            display: none;

            width: 100%;
            margin-top:15px;


            .card-content__description{
                width: 100%;
                font-weight: 300;
                line-height: 14px;

                color: #FFFFFF;

            }

            .card-content__category{
                color: #FFFFFF;
            }
        } 

        
    }

    .card-content:hover {
       .card-content__houver{
            display: block;
        }
    }

    :hover{
        cursor: pointer;
        height: 200px;

        .card-datetime{
            height:150px;
        }
    }
    
`