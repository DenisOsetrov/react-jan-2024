import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import styles from './MainLayout.module.css';


const MainLayout: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    return (
        <div className={styles.mainLayout}>
            <HeaderComponent />
            <div className={styles.content}>
                <Outlet context={[isAuthenticated, setIsAuthenticated]} />
            </div>
            <FooterComponent />
        </div>
    );
};

export default MainLayout;