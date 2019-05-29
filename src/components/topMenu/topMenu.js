import React from 'react';
import '../../styles/App.scss';

const TopMenu = () => {
    return(
        <ul className="mainMenu__menu__nav">
            <li className="nav__item">
                <a href="/">
                    Home
                </a>
            </li>
            <li className="nav__item">
                <a href="/">
                    Devices
                </a>
            </li>
            <li className="nav__item">
                <a href="/">
                    Delivery & Payment
                </a>
            </li>
            <li className="nav__item">
                <a href="/">
                    Guarantee
                </a>
            </li>
            <li className="nav__item">
                <a href="/">
                    About Us
                </a>
            </li>
        </ul>
    )
};

export default TopMenu;
