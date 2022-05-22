import { GET_MESSAGES } from "../actions/actionTypes";
import { Messages } from "../store/types";

let initialState: Messages ={
    m:[{
        id: 1,
        senderName:"Alex Proctor",
        messageText: "test message 1",
        sentDateTime: "",
        byMe: true
    }, {
        id: 2,
        senderName:"You Lin",
        messageText: "test message 2",
        sentDateTime: "",
        byMe: false
    }]
}

type Action = {type:string, payload:any};

export const MessageReducer = (state:Messages = initialState, action: Action) =>{
    switch(action.type){
        case GET_MESSAGES:
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