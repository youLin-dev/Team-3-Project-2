
import React from "react"


import "./Login2.css"
const RegisterPage = (props:any)=>{

return(
<div className="login--page">
<div className="login--form"><div className="row">
  

  <div className="column2">
    <div className="input-container">
      <input type="text" name="firstname" className="input--field" placeholder="First Name" /*onChange={handleChange}*/ />
    </div>
    <div className="input-container">
      <input type="text" name="lastname" className="input--field" placeholder="Last Name" /*onChange={handleChange}*/ />
    </div>
    <div className="input-container">
      <input type="text" name="username" className="input--field" placeholder="Email" /*onChange={handleChange}*/ />
    </div>
    <div className="input-container">
      <input type="password" className="input--field" name="password" placeholder="password" /*onChange={handleChange}*/ />
    </div>

    <button className="register-button" >Create/Edit Profile</button>
  </div>
</div>
</div>
</div>
)
}
export default RegisterPage;