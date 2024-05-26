import React from 'react';
import {Link} from "react-router-dom";

const HomeComponent = () => {
    return (
        <div>
            <h1 className="center">Welcome to Home, Bro!</h1>
            <h1>Завдання</h1>
            <h2>1 частина з ДЗ-6!</h2>
            <p>Створити сторінки та роути на них:</p>
            <ul>
                <li><Link to="/users">users</Link></li>
                <li><Link to="/posts">posts</Link></li>
                <li><Link to="/comments">comments</Link></li>
            </ul>
            <p>Дані брати з <a href="https://jsonplaceholder.typicode.com" target="_blank"
                               rel="noopener noreferrer">JSONPlaceholder</a></p>
            <p>При переході на кожну з них отримувати відповідні відповіді від <a
                href="https://jsonplaceholder.typicode.com" target="_blank"
                rel="noopener noreferrer">JSONPlaceholder</a> та виводити всі
                об'єкти.</p>

            <h3>План виконання:</h3>
            <ol>
                <li>Налаштувати сервіси для взаємодії з API, використовуючи бібліотеку axios.</li>
                <li>Створити моделі даних для users, posts, comments.</li>
                <li>Створити компоненти UsersComponent, PostsComponent, CommentsComponent.</li>
                <li>Встановити бібліотеку react-router-dom.</li>
                <li>Видалити файли App.tsx і App.css. Внести зміни в index.tsx, створити router і налаштувати його.</li>
                <li>Створити директорії: pages, layouts. Основний макет буде в MainLayout, який включає: &lt;Header
                    /&gt;, &lt;Footer /&gt;, &lt;Outlet /&gt;.
                </li>
                <li>Створити в layout - ErrorPage і додати errorElement.</li>
                <li>Розділити дані в router.tsx і index.tsx.</li>
                <li>Стилізувати компоненти і сторінки.</li>
                <li>Створити нові компоненти UserComponent, PostComponent, CommentComponent і перенести туди розмітку.
                </li>
                <li>Рознести сервіси по файлах. Створити загальний api.service з основним URL, і сервіси для users,
                    posts, comments.
                </li>
            </ol>

            <h2>2 частина - ДЗ-7</h2>
            <ol>
                <li>На сторінці з юзерами зробити лінку, при кліку на яку буде перехід на сторінку, на якій
                    відобразяться пости цього юзера. Відображатися пости мають у UsersPage як children.
                </li>
                <li>На сторінці зі всіма постами зробити 'button', при натисканні на який виводити коментарі цього поста
                    - тобто підміняти PostsPage на CommentsPage.
                </li>
            </ol>

            <h2>План виконання:</h2>
            <ol>
                <li>Перенести компоненти і залишити UsersPage і PostsPage.</li>
                <li>Створити окремі компоненти для сторінок користувачів і постів.</li>
                <li>Додати до router новий шлях для id та прописати <code>&lt;Outlet /&gt;</code> у UsersPage.
                    Відображає всі пости поки що.
                </li>
                <li>Внести зміни в конфігурацію маршрутизації, додавши шлях для постів користувачів з використанням
                    параметру <code>id</code>.
                </li>
                <li>У UsersPage додати <code>&lt;Outlet /&gt;</code> для відображення компонентів постів користувача.
                </li>
                <li>Використати <code>&lt;Outlet /&gt;</code> для динамічного відображення компонентів постів у
                    UsersPage.
                </li>
                <li>Створити лінку в UserComponent для переходу на сторінку постів цього користувача.</li>
                <li>Додати <code>&lt;Link&gt;</code> в компонент UserComponent, який буде перенаправляти на сторінку
                    постів користувача.
                </li>
                <li>У PostsPage використати <code>useParams</code> і витягнути <code>id</code> користувача.</li>
                <li>Використати хук <code>useParams</code> для отримання параметру <code>id</code> користувача з URL.
                </li>
                <li>Знайти всі пости користувача в компоненті PostsPage за допомогою <code>useState</code>.</li>
                <li>Використати хук <code>useState</code> для збереження стану постів користувача.</li>
                <li>У PostsPage додати <code>useEffect</code> з перевіркою і додати в хук <code>id</code>.
                    Передати <code>posts</code> у PostsComponent.
                </li>
                <li>Використати хук <code>useEffect</code> для отримання постів користувача при зміні <code>id</code>.
                </li>
                <li>У PostsComponent прийняти <code>posts</code> і зробити <code>map</code>. Додати інтерфейс для них.
                </li>
                <li>Створити компонент PostsComponent, який приймає список постів і відображає їх за
                    допомогою <code>map</code>.
                </li>
                <li>У PostComponent зробити кнопку з <code>onClick</code> та колбек-функцією, яка
                    викликає <code>navigate</code> на коментарі поста.
                </li>
                <li>Додати кнопку в PostComponent, яка буде виконувати навігацію до коментарів поста при натисканні.
                </li>
                <li>Створити CommentsPage для відображення коментарів поста.</li>
                <li>Створити компонент CommentsPage для відображення коментарів певного поста.</li>
                <li>Використати <code>useParams</code> для отримання <code>postId</code> з URL.</li>
                <li>Використати <code>useEffect</code> і <code>useState</code> для отримання і збереження коментарів
                    поста з API.
                </li>
                <li>Додати логіку для відображення коментарів поста на сторінці PostsPage.</li>
                <li>В компоненті PostsPage додати кнопку для кожного поста, яка буде перенаправляти на сторінку з
                    коментарями поста.
                </li>
                <li>Використати <code>useNavigate</code> для навігації до сторінки з коментарями.</li>
                <li>Стилізація компонентів і сторінок.</li>
                <li>Додати необхідні стилі для кнопок, сторінок і компонентів для покращення візуального відображення.
                </li>
            </ol>
        </div>
    );
};

export default HomeComponent;