
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {  } from "../../actions/UserActions";
import { } from "../Login/login2";


import "./Home.css"

export const Home: React.FC<any> = () => {

    //we need useSelector to access the store
    //we set it so that it can take <any state, and access any store>
    //our state object is set to change to whatever (state is in the store) 
    const appState = useSelector<any, any>((state) => state)

    //we need useDispatch to DISPATCH information to our Action (which dispatches to the store/reducers)
    const dispatch = useDispatch();

    //we need useState to store userID as state, and change it with it's mutator
    let [userID, setUserID] = useState(0);

    //whenever userSearch changes, we'll save the number as our userID state (using the mutator)
    const handleChange = (e:any) => {
        if(e.target.name === "userSearch") {
            setUserID(e.target.value) //use the mutator to get the value the user inputted
        }
    }

    //we need to actually send our pokeID state to the getPoke action
    const loadUser = async () => {
        await dispatch(
            getUser(userID) as any //we send the userID state variable to the getUser action
            //"as any" because the component doesn't know what type this will return
        )
    }

    return(
        <div className="home-page">
            <div className="home-container">
                <User user={appState.user}/>
                <h3>place holder!</h3>
                <input type="number" name="userSearch" placeholder="Enter UserID" onChange={handleChange}/>
                <button className="user-button" onClick={getUser}>Find User</button>
            </div>
        </div>
    );
}
function getUser(userID: number): any {
    throw new Error("Function not implemented.");
}

