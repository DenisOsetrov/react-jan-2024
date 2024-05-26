import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import CommentComponent from "./CommentComponent";

interface IProps {
    comments: ICommentModel[];
    postId?: string;
}

const CommentsComponent: FC<IProps> = ({comments,postId}) => {


    return (
        <div>
            <h2>Comments {postId ? `for user ${postId}` : 'for all users'}:</h2>
            <ul>
                {comments.map(comment => (
                    <CommentComponent key={comment.id} comment={comment}/>
                ))}
            </ul>
        </div>
    );
};

export default CommentsComponent;