import React from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.css';
import HeaderComponent from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";

const MainLayout = () => {
    return (
        <div>
            <h2 className="center">Please make your choice and choose one of three options!</h2>
            <HeaderComponent />
            <div className="content">
                <Outlet />
            </div>
            <FooterComponent />
        </div>
    );
};

export default MainLayout;