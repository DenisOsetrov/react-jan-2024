import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import styles from './MainLayout.module.css';



const MainLayout: FC = () => {
    return (
        <div className={styles.mainLayout}>
            <HeaderComponent />
            <div className={styles.content}>
                <Outlet />
            </div>
            <FooterComponent />
        </div>
    );
};

export default MainLayout;