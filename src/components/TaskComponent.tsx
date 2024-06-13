import React from 'react';
import styles from './TaskComponent.module.css';

const TaskComponent = () => {
    return (
        <div className={styles.taskList}>
            <h2>Завдання:</h2>
            <ol>
                <li>Є частинка коду додатка з використанням реакт-редаксу, яка виконує зміну стану
                    і має 2 кнопки: increment i decrement.
                </li>
                <li>Треба додати кнопку reset, яка буде робити оновлення - наприклад до 0 нашого значення.</li>
                <li>Треба додати кнопку mount (donate), яка буде збільшувати значення на 500 нашого значення.</li>
            </ol>
        </div>
    );
};

export default TaskComponent;