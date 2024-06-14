import React, {FC, useState} from 'react';
import {IPost} from "../models/IPost";
import {useAppDispatch, useAppSelector} from "../redux/slices/store";


interface PostWithCommentsProps {
    post: IPost;
}

const PostWithComments: FC<PostWithCommentsProps> = ({post}) => {

    const dispatch = useAppDispatch();
    const {comments} = useAppSelector(state => state.commentsSlice);
    const [showComments, setShowComments] = useState(false);

    const handleShowComments = () => {
        if (!showComments) {
            dispatch(commentAction.loadCommentsByPostId(post.id));
        }
        setShowComments(!showComments);
    };
    return (
        <div>
            <li>
                <h2>{post.title}</h2>
                <button onClick={handleShowComments}>
                    {showComments ? 'Hide' : 'Show'} Comments
                </button>
                { showComments && (
                    <ul>
                        {comments
                            .filter (comment => comment.postId === post.id)
                            .map(comment => (
                                <li key={comment.id}>
                                    <p><strong>{comment.name}</strong>: {comment.body}</p>
                                    <p>Email: {comment.email}</p>
                                </li>
                            ))}
                    </ul>
                )}
            </li>
        </div>
    );
};

export default PostWithComments;