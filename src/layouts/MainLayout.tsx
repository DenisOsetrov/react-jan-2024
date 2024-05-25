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
                    My home page. Plan of my task here:
                </h2>
            </NavLink>

            <HeaderComponent/>

            <div className="content">
                {/* Outlet - реактівський компонент для змінної частини сторінки*/}
                <Outlet/>
            </div>

            <FooterComponent/>
        </div>
    );
};

export default MainLayout;