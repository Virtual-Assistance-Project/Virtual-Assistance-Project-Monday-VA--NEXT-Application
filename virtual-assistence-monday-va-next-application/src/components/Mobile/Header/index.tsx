import { Container } from "./styled"
import Image from "next/image"
import Unknown from "../../../public/assets/Unknown.svg"
import Plus from "../../../public/assets/plus.svg"
import Link from "next/link"



export const HeaderMobile = () => {
    return <Container>
        <div className="over-header">
            <Image src={Unknown} alt='User' className="header-profile"/>
            <Link href={"/add"} className="add">
                <Image src={Plus} alt='User'/>
            </Link>
        </div>
        <h1>User</h1>
        <span>user@email.com</span>
    </Container>
}