import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/index.css'

function Header() {
    return (
        <ul>
            <li className="li-item">
                <NavLink to="home" >首页</NavLink>
            </li>
            <li className="li-item">
                <NavLink to="about">关于</NavLink>
            </li>
        </ul>
    )
}

export default Header;