import axios from "axios";
import { Member } from "../store/types";
import { Members } from "../store/types";
import { GET_MEMBERS, GET_MESSAGES } from "./actionTypes";
import { User } from "../store/types";
import { useSelector } from "react-redux";


interface ID{
    id: string
}
type t = {
    i:ID
}
export const getMembers = (I:any) => async (dispatch:any) =>{
    let memsRecieved:Members;
    let formattedArray:Member[];
    //const appState = useSelector<any, any>((state) => state);
    try{
        const s:t={
            i: {
                id: I
            }
        }
        
        const r = await axios.post('http://localhost:9000/member', String(I));
        if(r.status === 200){
            console.log(r);
            formattedArray = [];
            const mem = r.data;
            for(const j of mem){
                const formattedMember={
                    id: j.member_id,
                    username: j.user_fk.username,
                    firstName: j.user_fk.first_name,
                    lastName: j.user_fk.last_name,
                    phoneNumber: j.user_fk.phone_number
                };
                console.log(formattedMember);
                formattedArray.push(formattedMember);
            }
            console.log(formattedArray);
            memsRecieved = {m: formattedArray}
            return dispatch({
                type: GET_MEMBERS,
                payload: memsRecieved
            })
        }
    }catch(e){
        console.log(e)
        
    }
}
