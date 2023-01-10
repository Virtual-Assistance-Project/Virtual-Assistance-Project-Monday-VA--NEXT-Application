import { notifications } from "../../../database"
import { INotifications } from "../../../interfaces"
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
            <li>17</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
        </ul>
    </Container>
}