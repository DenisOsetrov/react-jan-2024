import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WarningComponent.module.css';

const WarningComponent = () => {
    return (
        <div className={styles.warning}>
            <h2>Access Denied! (Ua: Доступ заборонено)</h2>
            <p>You need to log in to view this page. (Ua: Ви повинні увійти, щоб переглянути цю сторінку)</p>
            <Link to="/">Go to Login</Link>
        </div>
    );
};

export default WarningComponent;