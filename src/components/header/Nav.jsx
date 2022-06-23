import React from 'react';

function Nav(props) {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="" className="menu__link">
                        About
                    </a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__link">
                        Services
                    </a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__link">
                        Pricing
                    </a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__link">
                        Blog
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;