import React, {FC, useEffect, useState} from 'react';
import CommentsComponent from "../components/CommentsComponent";
import {useParams} from "react-router-dom";
import {ICommentModel} from "../models/ICommentModel";
import commentsService from "../services/comments-api-service/comments.service";


const CommentsPage: FC = () => {

    useEffect(() => {
        commentsService.getAllComments().then(value => {
            setComments(value.data)
        })
    }, []);

    // рендеремо всі коментарі одного поста
    console.log(useParams());           // отримаємо {id:4} - id - прописали в path routers, 4 - написнули на 4 post
    const {id} = useParams();  // деструктуруємо useParams()
    console.log(id);                    // відповідь: 4 (при натисканні на 4 post)

    const [comments, setComments] = useState<ICommentModel[]>([]);


    // id дає помилку, треба зробити перевірку
    useEffect(() => {
        if (id) {
            commentsService.getCommentsByPostId(id).then(value => setComments(value.data));
        }
    }, [id]);


    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;
