import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderComponent.css';

const HeaderComponent = () => {
    return (
        <div className="header">
            <nav className="nav-links">
                <NavLink to="users" className="nav-link">
                    Users
                </NavLink>
                <NavLink to="posts" className="nav-link">
                    Posts
                </NavLink>
                <NavLink to="comments" className="nav-link">
                    Comments
                </NavLink>
            </nav>
            <hr/>
        </div>
    );
};

export default HeaderComponent;