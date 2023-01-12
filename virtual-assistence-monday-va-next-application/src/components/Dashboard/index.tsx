import { cardData } from "../../database"
import { CalenderMobile } from "../Mobile/Calender"
import { Card } from "../Mobile/Card"
import { HeaderMobile } from "../Mobile/Header"
import { Container, ContainerCard } from "./style"




export const DashComponet = () => {
return (
    <Container className="dashboard">
        <HeaderMobile/>
        <CalenderMobile/>
        <ContainerCard>
            <div>
                {cardData.map((card, index) => {
                    return <Card key={index} {...card} />;
                })}
            </div>
        </ContainerCard>
    </Container>
)
}