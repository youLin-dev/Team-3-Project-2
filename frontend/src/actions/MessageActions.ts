import axios from "axios";
import { Message } from "../store/types";
import { Messages } from "../store/types";
import { GET_MEMBERS, GET_MESSAGES } from "./actionTypes";
import { User } from "../store/types";
import { useSelector } from "react-redux";


interface ID{
    id: string
}
type t = {
    i:ID
}
export const getMessages = (I:number) => async (dispatch:any) =>{
    let memsRecieved:Messages;
    let formattedArray:Message[];
    console.log(I);
    //const appState = useSelector<any, any>((state) => state);
    
    try{
        
        
        const r = await axios.post('http://localhost:9000/message', I);
        if(r.status === 200){
            console.log(r);
            formattedArray = [];
            const mem = r.data;
            for(const j of mem){
                const formattedMember={
                    id: j.message_id,
                    senderName:j.member_fk.user_fk.first_name + j.member_fk.user_fk.last_name,
                    messageText: j.message_text,
                    sentDateTime: j.time_sent,
                    byMe: j.owned
                }
                formattedArray.push(formattedMember)
            }
            console.log(formattedArray);
            memsRecieved = {m: formattedArray}
            return dispatch({
                type: GET_MESSAGES,
                payload: memsRecieved
            })
        }
    }catch(e){
        console.log(e)
    }
}
