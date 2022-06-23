import React from 'react';

import Logo from "./Logo";
import Nav from "./Nav";
import ContactLink from "./ContactLink";
import HeaderContent from "./HeaderContent";


function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__top">
                    <Logo />
                    <Nav />
                    <ContactLink/>
                </div>
                <div className="header__content">
                    <HeaderContent />
                </div>
            </div>
        </header>
);
}

export default Header;