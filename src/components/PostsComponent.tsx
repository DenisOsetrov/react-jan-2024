import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/slices/store";
import {postActions} from "../redux/slices/postSlice";

const PostsComponent = () => {
    const dispatch = useAppDispatch();
    const { posts, isLoaded, error } = useAppSelector(state => state.postSlice);
    const [selectedPost, setSelectedPost] = useState<number | null>(null);

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, [dispatch]);

    const togglePostBody = (id: number) => {
        setSelectedPost(selectedPost === id ? null : id);
    };

    return (
        <div>
            <h1>Posts</h1>
            {error && <p>{error}</p>}
            {!isLoaded && <p>Loading...</p>}
            {isLoaded && posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <button onClick={() => togglePostBody(post.id)}>
                        {selectedPost === post.id ? 'Hide' : 'Show'} Body
                    </button>
                    {selectedPost === post.id && <p>{post.body}</p>}
                </div>
            ))}
        </div>
    );
};

export default PostsComponent;