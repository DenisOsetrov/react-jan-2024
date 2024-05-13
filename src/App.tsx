import React, {FC, useState} from 'react';
import './App.css';
import UsersComponent from "./components/users-component/UsersComponent";
import PostsComponent from "./components/posts-component/PostsComponent";

const App: FC = () => {

    const [userId, setUserId] = useState<number | null>(null);
    const choseUser = (id: number) => {
        setUserId(id);
    }

    return (
        <div className={'task'}>
            <h2>Завдання 2.</h2>
            <ul>
            <li> Отримати та вивести інфу по всіх юзерах з https://dummyjson.com/docs/users.</li>
            <li>Для запитів використовуємо axios та розносимо логіку в сервіси.</li>
            <li>Структура компонентів : App - Users- User.</li>
            <li>В компоненті User зробити <button>кнопку</button>, при натсиканні на яку</li>
            <li>відбувається стейт ліфтінг ід користувача в батьківську компоненту.</li>
            <li>В батьківській компоненті вивести всі пости обраного юзера</li>
            <li>(https://dummyjson.com/docs/posts  Get all posts by user id)</li>
            </ul>
            <div className={'wrapperApp'}>

                <div className={'users-box'}>
                    <h2>Users by API dummyjson.com</h2>
                    <UsersComponent choseUser={choseUser}/>
                </div>

                <div className={'posts-box'}>
                    <h2>Posts by user id</h2>
                    {
                        !!userId && <PostsComponent userId={userId}/>
                    }
                </div>

            </div>
        </div>
    );
}

export default App;