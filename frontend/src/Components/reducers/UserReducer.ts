
import { LOGIN_USER } from "../../actions/actionTypes";
import { User } from "../store/types";

let initialState: User = {
    id:0,
    username:"",
    password:""
}

//this is an object that will determine what action to take
type Action = {type:string, payload:object};

//the reducer takes in a User object, which is meant to update initialState
//it will also take in an Action object that contains wha action to take, and what data it ahs (payload)
export const userReducer = (state:User = initialState, action: Action) => {
    //switch based on the type in the Action object
    //Look atlogin User in the UserActions to see where this is coming from

    switch(action.type){
        case LOGIN_USER:
            //We change the default User to the User we sent in the (payload)
            //in this way, we change the initial state to the data that came from the server
            
            initialState //= action.payload    UNABLE TO DEBUG "initialState" doesn't like action ??
            return {
                ...initialState//return that object so it can be reused in the view
            }
            default:
                return state
            
               
            }
    }

