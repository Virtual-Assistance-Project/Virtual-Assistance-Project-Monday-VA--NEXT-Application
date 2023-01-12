import { Container } from "./style"

interface CardProps {
  title: string;
  type: string;
  startTime: string;
  endTime: string;
  description?: string;
}

export const Card = ({ title, type, startTime, endTime, description }: CardProps) => {
  return (
    <Container>
      <div className="card-datetime">
        <div className="card-datetime__over">
          <span className="datetime-hour">{startTime}</span>
        </div>
        <div className="line"></div>
        <div className="card-datetime__down">
          <span className="datetime-hour">{endTime}</span>
        </div>
      </div>
      <div className="card-content">
        <h1 className="card-content__title">{title}</h1>
        <span className="card-type">{type}</span>
        { description && 
        <div className="card-content__houver">
            <span className="card-content__description">{description}</span>
          </div>
        }
      </div>
    </Container>
  );
};