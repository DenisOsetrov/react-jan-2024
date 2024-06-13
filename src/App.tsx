import React from 'react';
import styles from './App.module.css';

import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, donate, increment, reset} from "./redux/slices/slice1";
import TaskComponent from "./components/TaskComponent";


const App = () => {

    const {xxx} = useAppSelector((state) => state.slice1);
    const dispatch = useAppDispatch();


    return (
        <div className={styles.container}>
            <TaskComponent />
            <h2 className={styles.heading}>Банка monoBank - {xxx}</h2>

            <div className={styles.buttonContainer}>
                <button
                    className={styles.button}
                    onClick={() => {
                        dispatch(increment(100));
                    }}
                >
                    increment
                </button>

                <button
                    className={styles.button}
                    onClick={() => {
                        dispatch(decrement());
                    }}
                >
                    decrement
                </button>

                <button
                    className={styles.button}
                    onClick={() => {
                        dispatch(reset());
                    }}
                >
                    reset
                </button>

                <button
                    className={styles.button}
                    onClick={() => {
                        dispatch(donate());
                    }}
                >
                    donate
                </button>
            </div>
        </div>
    );
};


export default App;
