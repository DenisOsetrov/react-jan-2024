import React, {FC, useEffect, useState} from 'react';

import {PostBasicModel} from "../../models/basic-models/PostBasicModel";
import {getAllPostsByUserId} from "../../services/posts-services/posts.api.services";
import PostComponent from "../post-component/PostComponent";

interface IProps {
    userId: number
}

const PostsComponent: FC<IProps> = ({userId}) => {


    const [posts, setPosts] = useState<PostBasicModel[]>([])
    console.log(userId)

    useEffect(() => {
        getAllPostsByUserId(userId)
            .then(value => setPosts(value.posts)); // setPosts([...value.posts])) - теж працює, як і з users

    }, [userId]);
    console.log(posts) // відображає два значення: початкове і оновлене!
    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;