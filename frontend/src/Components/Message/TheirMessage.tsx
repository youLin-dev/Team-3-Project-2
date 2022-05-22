import { Message } from "../../store/types"
import './TheirMessage.css'
export const TheirMessage: React.FC<any> = (props:Message)=>{

    return(
        <div className="message2">
            <h3 id="a">{props.senderName}  {props.sentDateTime}</h3>
            <p id="b">{props.messageText}</p>
        </div>
    )
}