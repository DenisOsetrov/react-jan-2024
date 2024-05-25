import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import CommentComponent from "./CommentComponent";

interface IProps {
    comments: ICommentModel[];
}

const CommentsComponent: FC<IProps> = ({comments}) => {


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