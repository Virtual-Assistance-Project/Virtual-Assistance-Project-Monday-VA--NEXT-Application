import Link from 'next/link';
import { ILink } from '../../interfaces';
import { Container } from "./style"

export  const Button = (props:ILink) => {
    return (
        <Link href={props.link}>
            <Container>
                {props.content}
            </Container>
        </Link>
    )
}