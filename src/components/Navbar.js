import React from "react"
import Logo from "./Logo"
import Button from "./Button"
import Sidebar from "./Sidebar"
import useWindowDimensions from "./windowDimensions"
import "./Navbar.css"

export default function Navbar () {

    const { height, width } = useWindowDimensions();

    if (width < 700) {
        return (
            <nav id="nav" className="nav">
                <Logo />
                <Sidebar />
            </nav>
        )
    } 

    else {
        return (
            <nav id="nav" className="nav">
                <Logo />
                <ul className="nav-items">
                    <a href="#Home"><li>Home</li></a>
                    <a href="#RoomAllocation"><li>Room Allocation</li></a>
                    <a href="BoarderDetails"><li>Boarder Detail</li></a>
                    <a href="Complaint"><li>Complaint</li></a>
                    <a href="HMC"><li>HMC</li></a>
                    <a href="Proposal"><li>Proposal</li></a>
                </ul>
                <Button />
            </nav>
        )
    }
    
}