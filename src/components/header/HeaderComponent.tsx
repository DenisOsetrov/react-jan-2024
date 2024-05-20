import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import './HeaderComponent.css';

const HeaderComponent = () => {
    const location = useLocation();

    return (
        <div className="header">
            <nav className="nav-links">
                <NavLink
                    to="users"
                    className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}
                >
                    Users
                </NavLink>
                <NavLink
                    to="posts"
                    className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}
                >
                    Posts
                </NavLink>
                <NavLink
                    to="comments"
                    className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}
                >
                    Comments
                </NavLink>
            </nav>
            <hr/>
        </div>
    );
};

export default HeaderComponent;

// 2 варіант
//import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import './HeaderComponent.css';
//
// interface CustomNavLinkProps {
//     to: string;
//     location: {
//         pathname: string;
//     };
//     children: React.ReactNode;
// }
//
// const HeaderComponent = () => {
//     const location = useLocation();
//
//     return (
//         <div className="header">
//             <nav className="nav-links">
//                 <CustomNavLink to="/users" location={location}>Users</CustomNavLink>
//                 <CustomNavLink to="/posts" location={location}>Posts</CustomNavLink>
//                 <CustomNavLink to="/comments" location={location}>Comments</CustomNavLink>
//             </nav>
//             <hr/>
//         </div>
//     );
// };
//
// const CustomNavLink = ({ to, location, children }: CustomNavLinkProps) => (
//     <NavLink
//         to={to}
//         className={location.pathname === to ? "nav-link active-link" : "nav-link"}
//     >
//         {children}
//     </NavLink>
// );
//
// export default HeaderComponent;