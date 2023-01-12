import {Container} from "./style"
import Image from "next/image";
import MondayIcon from "../../public/Icon/MondayIcon.svg"
import { Button } from "../Link";



export  const LandingPage = () => {
    return (
        <Container>
            <h1>Monday VA</h1>
            <Image src={MondayIcon} alt="Monday" />
            <span>Conecte & controle sua vida com seu mobile</span>
            <Button link={"/login"} content={"Comece já!"}/>
        </Container>
    )
}