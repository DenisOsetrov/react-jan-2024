import React, {FC, useEffect, useState} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import commentsService from "../services/comments-api-service/comments.service";
import CommentComponent from "../components/CommentComponent";

const CommentsComponent:FC = () => {

    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        commentsService.getAllComments().then(value => {
            setComments(value.data)})}, []);

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => (
                    <CommentComponent key={comment.id} comment={comment}/>
                ))}
            </ul>
        </div>
    );
};

export default CommentsComponent;