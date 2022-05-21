

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../actions/UserActions"
import {UserLogin} from "../../actions/UserActions"

import "./Login2.css"
import RegisterPage from "./Register"
//export const LoginPage: React.FC<any>= ()=>{

export const LoginPage: React.FC<any> = (props:any)=>{

/*Missing code from login.tsx */
    //this is how we access the state in the store. The data in the universal data file.
    const appState = useSelector<any, any>((state: any) => state);
    //we need this object to actually dispatch data to our store
    const dispatch = useDispatch();
    //useState hooks to declare a state object, a mutator (which changed state), and a default value
    let [username, setUsername] = useState('');//useState must be imported
    let [password, setPassword] = useState('');
    //we'll use this object to switch components whenever appropriate
    //this is what lets us navigate through the application through button clicks, etc.
    const navigate = useNavigate();
    //BUSINESS LOGIC
    //when user updates the username/password field, this login function is called
    //when user updates the values, username OR password get updated as well
    //this is how we can send a username/password object to the loginUser Action
    //whatever type of datatype and call it e)
    const handleChange = (e:any) => {
        if(e.target.name === "username"){ //if the input is name=username...
            setUsername(e.target.value) //set username to be the value that was inserted
            console.log(username) //to show useState working
        } else {
            setPassword(e.target.value) //otherwise, set the password with that value.
            console.log(password)
        }
    }
    //LOGIN functionality. we take the state objects and send them to the userLogin Action
    //sending /dispatching the data
    const login = async () => {
        console.log("login")
        await dispatch(
            loginUser({username, password}) as any

            //these are the states that were changed with handleChange
            //we need "as any" to make it so that the return type can be any type
        )
    }
    //useEffect HOOK that runs when appState changes
    //based on whether the user successfully logged in, change the page or do nothing
    useEffect(() => {
        if(appState.user.id > 0){//upon login if id > 
            navigate("/home"); //thanks to Routing in the App.tsx, this will switch the component.
        }
    }, [appState])

    return(
<<<<<<< HEAD
        <div className="login">

            <div className="text-container">
                
                <h3>Please sign in</h3>

                <div className="input-container">
                    <input type="text" name="username" placeholder="username" onChange={handleChange}/>
                </div>
                <div className="input-container">
                    <input type="password" name="password" placeholder="password" onChange={handleChange}/>
                </div>
                <div className="container">
                    <button className="login-button" onClick={login}>Login</button>
                </div>
            </div>
                

            <div className="disclaimer">
                <p>PokeMart© and its affiliates do not condone the misuse or mistreatment of pokemon</p>
            </div>

        </div>
    )


=======
      <div className="login">

          <div className="text-container">
              
              <div className="input-container">
                  <input type="text" name="username" placeholder="username" onChange={handleChange}/>
              </div>
              <div className="input-container">
                  <input type="password" name="password" placeholder="password" onChange={handleChange}/>
              </div>

              <button className="login-button" onClick={login}> Friends Login!</button>
          </div>

          <div className="disclaimer">
          </div>

      </div>
  )
>>>>>>> 5a4109b2063397c46bcc718a371f533157b35689
    
}
export default LoginPage;

/*


)
}*/
