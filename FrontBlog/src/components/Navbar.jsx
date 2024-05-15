import React from 'react';
import { Link } from 'react-router-dom';
import postsIcon from '../assets/img/postIcon.png';
import homeIcon from '../assets/img/homeIcon.png';
export const Navbar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <img src={homeIcon}/>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <img src={postsIcon}/>
                    <Link to="/publications">Publications</Link>
                </li>
            </ul>
        </nav>
    );
};