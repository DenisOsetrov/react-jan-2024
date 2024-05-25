import React, {FC, useEffect, useState} from 'react';
import CommentsComponent from "../components/Comments/CommentsComponent";
import {useParams} from "react-router-dom";
import {ICommentModel} from "../models/ICommentModel";
import commentsService from "../services/comments.service";


const CommentsPage: FC = () => {
    // Декларуємо стан для збереження коментарів
    const [comments, setComments] = useState<ICommentModel[]>([]);

    // Отримуємо параметр id з URL за допомогою useParams
    const { id } = useParams<{ id: string }>();
    console.log(id);  // Виводимо id у консоль для перевірки

    // Використовуємо useEffect для завантаження коментарів при першому рендері компонента та при зміні id
    useEffect(() => {
        if (id) {
            // Якщо id існує, завантажуємо коментарі поста з сервісу
            commentsService.getCommentsByPostId(id).then(value => setComments(value.data));
        } else {
            // Якщо id не існує, завантажуємо всі коментарі
            commentsService.getAllComments().then(value => setComments(value.data));
        }
    }, [id]);  // Залежність useEffect від id

    return (
        <div>
            {/* Передаємо коментарі у компонент CommentsComponent для відображення */}
            <CommentsComponent comments={comments} />
        </div>
    );
};


export default CommentsPage;
