import React, {FC} from 'react';
import {PostBasicModel} from "../../models/basic-models/PostBasicModel";

interface IProps {
    post: PostBasicModel
}

const PostComponent: FC<IProps> = ({ post }) => {
    console.log('Rendering post:', post)
    return (
        <div>
            <h3>{post.id}. {post.title}</h3>
            <p>Post "{post.body}"</p>
            <p>UserId: {post.userId}</p>
            <p>Likes: {post.reactions.likes}, Dislikes: {post.reactions.dislikes}</p>
            <p>Tags: <i>{post.tags.join(', ')}</i></p>
        </div>
    );
};

export default PostComponent;