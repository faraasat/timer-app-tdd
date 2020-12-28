import { IChild } from "../../Types/timer-types";
import "./card.style.css";

const CardComponent: React.FC<IChild> = ({ children }) => {
    return (
        <div className='timer-card-component'>{children}</div>
    )
};

export default CardComponent;
