import React, {FC} from 'react';
import UsersComponent from "../components/UsersComponent";
import {Outlet} from "react-router-dom";
import styles from './UsersPage.module.css';


const UsersPage: FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.leftPane}>
                <UsersComponent/>
            </div>
            <div className={styles.rightPane}>
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;
