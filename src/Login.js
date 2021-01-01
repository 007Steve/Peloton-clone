import React from 'react'
import './Login.css'
function Login() {
    return (
        <div className="login_container">
            <img src="https://www.ldg.com/wp-content/uploads/2018/04/PelotonLogo.png" alt="logo"/>
            <a id="login__btn" href="/">Login</a>
            {/* <form>
                <label htmlFor="uesrname">Username</label>
                <br/>
               <input type="text" placeholder="username"/>
               <br/>
               <label htmlFor="password">Password</label>
               <br/>
               <input type="text" placeholder="username"/>
               <br/>
               <input type="submit" value="submit"/>
            </form> */}
        </div>
    )
}

export default Login
