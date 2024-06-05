import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WarningComponent.module.css';

const WarningComponent = () => {
    return (
        <div className={styles.warning}>
            <h2>Access Denied!</h2>
            <p>You need to log in to view this page</p>
            <Link to="/">Go to Login</Link>
        </div>
    );
};

export default WarningComponent;