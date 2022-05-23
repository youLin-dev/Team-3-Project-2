import React, { useEffect, useState } from "react"
import { Member } from "../../store/types"
import './MemberComponent.css'

export const MemberComponent: React.FC<any> = (props:Member)=>{
    //let [mem, setMem] = useState()
    
    return(
        <div className="member">
            <span>
                {props.username}
                
            </span>
            <span>
                {props.firstName} {props.lastName}:  {props.phoneNumber}
            </span>
        </div>
    )
}


/*        <div className="member">
            <article className="first-container">
                <h3>{props.username}</h3>
            </article>
            
            <article className="inline-container">
                <h5 className="name">{props.firstName} {props.lastName}:  {props.phoneNumber}</h5>
            </article>
            
        </div>*/