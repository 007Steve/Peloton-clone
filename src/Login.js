import React from 'react'
import './Login.css'
function Login() {
    return (
        <div className="login_container">
            <img src="https://www.ldg.com/wp-content/uploads/2018/04/PelotonLogo.png"/>
            <form className="form__container">
                <h2>Login</h2>
                <div>
                    <input className="form__input" placeholder="Username"/>
                </div>
                <br/>
                <div>
                    <input className="form__input" placeholder="Password"/>
                </div>
            </form>
        </div>
    )
}

export default Login
