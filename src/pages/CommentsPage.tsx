import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../redux/slices/store";
import CommentComponent from "../components/CommentComponent";

const CommentsPage = () => {
    const dispatch = useAppDispatch();
    const { comments, isLoaded, error } = useAppSelector(state => state.commentSlice);

    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, []);

    return (
        <div>
            <h1>Comments</h1>
            {error && <p>{error}</p>}
            {!isLoaded && <p>Loading...</p>}
            {isLoaded && comments.map(comment => (
                // eslint-disable-next-line react/jsx-no-undef
                <CommentComponent key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default CommentsPage;