import React from 'react';
import logo from "../../assets/img/logo.svg";

function Logo(props) {
    return (
        <a className="logo" href="#">
            <img src={logo} alt="logo" />
        </a>
    );
}

export default Logo;