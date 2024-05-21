import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import router from "./router/router";

// Це створює кореневий елемент для рендерингу за допомогою API createRoot у React 18,
// що замінює застарілий метод ReactDOM.render.
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    // Обгортання всього додатку у <React.StrictMode> забезпечує додаткові перевірки і допомагає виявляти потенційні проблеми.
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

reportWebVitals();
