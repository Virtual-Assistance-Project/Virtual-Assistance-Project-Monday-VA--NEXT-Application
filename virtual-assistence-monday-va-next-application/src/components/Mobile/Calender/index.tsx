import { Container } from "./style"


export const CalenderMobile = () => {
    return <Container>
        <div className="calender-today">
            <span className="day">Today</span>
            <span className="mark"/>
        </div>
        <ul>
            {/* {
              notifications.map((item: INotifications) => void  {
                    print(item:INotifications)
              })
            } */}
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
        </ul>
    </Container>
}