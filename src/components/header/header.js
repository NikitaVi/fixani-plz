import React from 'react';

import './header.css'

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a>Your Movie</a>
            </h3>
            <ul className="header d-flex" >
                <li>
                    <a>Movies</a>
                </li>
                <li>
                    <a>Serials</a>
                </li>
                <li>
                    <a>Cartoons</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;