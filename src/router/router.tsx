import ErrorPage from "../layouts/errors/ErrorPage";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";


const router = createBrowserRouter([
    {
        path: '/', // можна path: ''
        element: <MainLayout />,
        errorElement: <ErrorPage />,

        children: [    // дочірні елементи для MainLayout це Outlet - відображається лише 1 компонент
            { index: true, element: <HomePage /> }, // або можна використати path: '' для home
            { path: 'users', element: <UsersPage />,
                children: [
                    {path: ':id', element: <PostsPage/>} // залишаємося на батьківському рівні
                ]},
            // { path: 'users/:id', element: <PostsPage/>}, // коли хочемо замінити UsersPage на PostsPage
            { path: 'posts', element: <PostsPage /> },
            { path: 'comments', element: <CommentsPage /> }
        ],
    },
]);

export default router;