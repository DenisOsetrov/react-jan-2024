import React, {FC, useEffect, useState} from 'react';
import PostsComponent from "../components/Posts/PostsComponent";
import {useParams} from "react-router-dom";
import {IPostModel} from "../models/IPostModel";
import postsService from "../services/posts.service";


const PostsPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    console.log(id);  // відповідь: 4 (при натисканні на 4 юзера)

    const [posts, setPosts] = useState<IPostModel[]>([]);

    // Виконуємо запит лише на основі наявності `id`
    useEffect(() => {
        if (id) {
            // Якщо є `id`, завантажуємо пости конкретного користувача
            postsService.getPostsByUserId(id).then(value => setPosts(value.data));
        } else {
            // Якщо немає `id`, завантажуємо всі пости
            postsService.getAllPosts().then(value => setPosts(value.data));
        }
    }, [id]);

    return (
        <div>
            <PostsComponent posts={posts} userId={id}/>
        </div>
    );
};

export default PostsPage;