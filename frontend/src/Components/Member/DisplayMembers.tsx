import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { getMembers } from "../../actions/MemberActions";
import { Member } from "../../store/types"
import { MemberComponent } from "./MemberComponent"



export const DisplayMembers: React.FC<any> = ({})=>{
    const appState = useSelector<any, any>((state: any) => state);
    let [mems, setMembers] = useState([])
    useEffect(() => {
        setMembers(appState.members.m)
        console.log(appState.members)
    }, [appState])

    useEffect(() => {
        setMembers(appState.members.m)
        console.log("DisplayMembers component loaded")
    }, [])

    return(
        <div>
            {mems.map((member:Member) => {
                return <MemberComponent {...member} key={member.id}/>
            })}
        </div>
    )
}


//key={posts.postId} line 10