import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Button from "./Button";
import './Sidebar.css';

export default function Sidebar () {
  return (
    <Menu right width={'100%'}>
        <ul className="nav-items">
            <a href="#Home"><li>Home</li></a>
            <a href="#RoomAllocation"><li>Room Allocation</li></a>
            <a href="BoarderDetails"><li>Boarder Detail</li></a>
            <a href="Complaint"><li>Complaint</li></a>
            <a href="HMC"><li>HMC</li></a>
            <a href="Proposal"><li>Proposal</li></a>
        </ul>
        <Button />
    </Menu>
  );
};