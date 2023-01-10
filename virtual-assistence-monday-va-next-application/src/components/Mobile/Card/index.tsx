import { Container } from "./style"



export const Card = () => {
    return <Container>
        <div className="card-datetime">
            <div className="card-datetime__over">
                <span className="datetime-hour">11</span>
                <span className="datetime-minute">30</span>
            </div>
            <div className="line"></div>
            <div className="card-datetime__down">
                <span className="datetime-hour">12</span>
                <span className="datetime-minute">30</span>
            </div>
        </div>
        <div className="card-content">
            <h1 className="card-content__title">DESING MEETING</h1>
            <span className="card-type">Work</span>
            <div className="card-content__houver">
                <span className="card-content__description">Daily with team</span>
                <span className="card-content__category">high</span>
            </div>
        </div>
    </Container>
}