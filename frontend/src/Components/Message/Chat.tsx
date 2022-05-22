import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Message } from "../../store/types";
import { MiddleComponent } from "./MiddleComponent";

export const Chat: React.FC<any> = ({})=>{
    const appState = useSelector<any, any>((state: any) => state);
    let [mems, setMembers] = useState([])
    useEffect(() => {
        setMembers(appState.messages.m)
        console.log(appState.messages)
    }, [appState])

    return(
        <div>
            {mems.map((message:Message) => {
                return <MiddleComponent {...message} key={message.id}/>
            })}
        </div>
    )
}