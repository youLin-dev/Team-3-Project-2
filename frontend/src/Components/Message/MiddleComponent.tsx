import React, { useEffect, useState } from "react"
import { Message } from "../../store/types"
import { MyMessage } from "./MyMessage"
import { TheirMessage } from "./TheirMessage"

export const MiddleComponent: React.FC<any> = (props:Message)=>{
    let [mess, setMess] = useState({});

    useEffect(()=>{
        setMess(props)
    },[mess])
    return(
        <div>
            {props.byMe ? <MyMessage {...mess}/> : <TheirMessage {...mess}/>}
        </div>
    )
}