import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderComponent.module.css';

const HeaderComponent = () => {
    return (
        <div className={styles.header}>
            <Link to={'/'} className={styles.link}>Login page</Link>
            <Link to={'/cars'} className={styles.link}>Cars page</Link>
        </div>
    );
};

export default HeaderComponent;