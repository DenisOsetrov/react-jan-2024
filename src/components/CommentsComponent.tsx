import React, {FC, useEffect, useState} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import {userApiService} from "../services/api.service";

const CommentsComponent: FC = () => {

    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        userApiService.getAllComments().then(value => {
            setComments(value.data)
        })
    }, []);

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h3>{comment.id}. {comment.name}</h3>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsComponent;
