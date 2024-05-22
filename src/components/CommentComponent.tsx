import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";

interface IProps {
    comment: ICommentModel;
}


const CommentComponent:FC <IProps> = ({comment}) => {
    return (
        <div>
            <li key={comment.id}>
                <h3>{comment.id}. {comment.name}</h3>
                <p>{comment.body}</p>
            </li>
        </div>
    );
};

export default CommentComponent;