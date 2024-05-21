import React, {FC} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './MainLayout.css';
import HeaderComponent from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";

const MainLayout: FC = () => {
    return (
        <div>
            <NavLink to="" className="no-decoration">
                <h2 className="center">
                    Please make your choice and choose one of three options!
                </h2>
            </NavLink>
            <HeaderComponent/>
            <div className="content">
                <Outlet/>
            </div>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;