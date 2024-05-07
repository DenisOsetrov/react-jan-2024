import React, { FC, useEffect, useState } from 'react';
import { PostModel } from '../../models/post';
import PostComponent from '../post/PostComponent';
import { getAllPosts } from '../../services/posts.api.service';

export interface ApiResponse {
    posts: PostModel[];
}

const PostsComponent: FC = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        getAllPosts().then(({ data }) => {
            const postsArray = data.posts; // Перетворити об'єкт на масив
            console.log(postsArray)
            setPosts(postsArray);
        });
    }, []);



    return (
        <div>
            {posts.map((post) => (
                <PostComponent key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostsComponent;