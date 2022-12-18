import React from "react"
import "./Button.css"

export default function Button () {
    return (
        <div className="btn">
            <button className="login-btn" id="login-btn">Log In</button>
            <button className="signup-btn" id="signup-btn">Sign Up</button>
        </div>
    )
}