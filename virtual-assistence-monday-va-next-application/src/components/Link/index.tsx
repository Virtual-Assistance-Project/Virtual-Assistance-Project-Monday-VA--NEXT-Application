import Link from 'next/link';
import { ILink } from '../../interfaces';
import { Container } from "./style"

export  const Button = (props:ILink) => {
    return (
        <Container>
            <Link href={props.link}>
                {props.content}
            </Link>
        </Container>
    )
}