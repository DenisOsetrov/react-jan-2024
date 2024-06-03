import ErrorPage from "../layouts/errors/ErrorPage";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";


const router = createBrowserRouter([
    {
        path: '/', // можна path: ''
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,

        children: [    // Outlet лише 1 компонент
            {index: true, element: <AuthPage/>},
            { path: 'cars', element: <CarsPage/>}
        ],
    },
]);

export default router;