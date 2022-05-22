import { GET_MEMBERS } from "../actions/actionTypes";
import { Member } from "../store/types";
import { Members } from "../store/types";

let initialState: Members={
    m:[
        {
            id: 1,
            username: "user1",
            firstName: "Alex",
            lastName: "Proctor",
            phoneNumber: "000-000-0000"
        },
        {
            id: 2,
            username: "user2",
            firstName: "You",
            lastName: "Lin",
            phoneNumber: "000-000-0000"
        },
    ]
}
type Action = {type:string, payload:any};

export const MemberReducer = (state:Members = initialState, action: Action) =>{
    switch(action.type){
        case GET_MEMBERS:
            //We change the default User to the User we sent in the (payload)
            //in this way, we change the initial state to the data that came from the server
            
            initialState = action.payload    //UNABLE TO DEBUG "initialState" doesn't like action ??
            //fixed by alex check comment on line 15
            return {
                ...initialState//return that object so it can be reused in the view
            }
            default:
                return state
            
               
            }
}