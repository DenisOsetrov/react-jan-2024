import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import {userApiService} from "../services/api.service";

const PostsPage: FC = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        userApiService.getAllPosts().then(value => {
            setPosts(value.data)
        });
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.id}. {post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsPage;