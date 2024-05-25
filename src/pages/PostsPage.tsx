import React, {FC, useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent";
import {useParams} from "react-router-dom";
import {IPostModel} from "../models/IPostModel";
import postsService from "../services/posts-api-service/posts.service";


const PostsPage: FC = () => {

    // рендеремо всі posts
    useEffect(() => {
        postsService.getAllPosts().then(value => setPosts(value.data));
    }, [])


    // рендеремо всі пости одного юзера
    // console.log( useParams())  // отримаємо {id:4} - id - прописали в path routers, 4 - написнули на 4 юзера
    const {id} = useParams(); // деструктуруємо useParams()
    console.log(id)  // відповідь: 4 (при натисканні на 4 юзера)

    const [posts, setPosts] = useState<IPostModel[]>([]);

    // id дає помилку, треба зробити перевірку
    useEffect(() => {
        if (id)
            postsService.getPostsByUserId(id).then(value => setPosts(value.data));
    }, [id]);

    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;