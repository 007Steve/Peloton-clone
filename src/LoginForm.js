import React from 'react'
import './Login.css'
function LoginForm() {
    return (
        <div className="login_container">
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

export default LoginForm