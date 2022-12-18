import React from "react"
import logo from "../images/logo.png"
import "./Logo.css"

export default function Logo () {
    return (
        <div className="logo">
            <img className="logo--img" src={logo} alt="logo" />
            <h3 className="logo--text">NEHRU HALL OF RESIDENCE</h3>
        </div>
    )
}