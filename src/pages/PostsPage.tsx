import React, {FC, useEffect, useState} from 'react';
import postsService from "../services/posts-api-service/posts.service";
import {IPostModel} from "../models/IPostModel";
import PostComponent from "../components/PostComponent";



const PostsPage: FC = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        postsService.getAllPosts().then(value => setPosts(value.data));
    }, [])

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <PostComponent key={post.id} post={post}/>
                ))}
            </ul>
        </div>
    );
};

export default PostsPage;