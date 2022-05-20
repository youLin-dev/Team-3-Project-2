import axios from "axios";
import { Member } from "../store/types";
import { Members } from "../store/types";
import { GET_MEMBERS } from "./actionTypes";
import { User } from "../store/types";
import { useSelector } from "react-redux";

const appState = useSelector<any, any>((state) => state);
interface ID{
    id: string
}
type t = {
    i:ID
}
export const getMembers = ({}) => async (dispatch:any) =>{
    let memsRecieved:Members;
    let formattedArray:Member[];
    
    try{
        const s:t={
            i: {
                id:appState.user.user_id.string
            }
        }
        
        const r = await axios.post('http://localhost:9000/getMembers', s.i);
        if(r.status === 200){
            console.log(r);
            formattedArray = [];
            const mem = r.data.members;
            for(const j of mem){
                const formattedMember={
                    username: mem.user_fk.username,
                    firstName: mem.user_fk.first_name,
                    lastName: mem.user_fk.last_name,
                    phoneNumber: mem.user_fk.phone_number
                }
                formattedArray.push(formattedMember)
            }
            console.log(formattedArray);
            memsRecieved = {m: formattedArray}
            return dispatch({
                type: GET_MEMBERS,
                payload: memsRecieved
            })
        }
    }catch(e){
        console.log("failed to get members")
    }
}
