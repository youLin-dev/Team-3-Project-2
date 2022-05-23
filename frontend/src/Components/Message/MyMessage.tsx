import { Message } from "../../store/types"
import './MyMessage.css'
export const MyMessage: React.FC<any> = (props:Message)=>{

    return(
        <div className="message">
            <h3 id="a">{props.senderName}  {props.sentDateTime}</h3>
            <p id="b">{props.messageText}</p>
        </div>
    )
}