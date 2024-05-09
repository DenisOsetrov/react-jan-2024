import React, {FC} from 'react';
import {PostBasicModel} from "../../models/basic-models/PostBasicModel";

interface IProps {
    post: PostBasicModel
}

const PostComponent : FC <IProps> = ({post}) => {
    return (
        <div>{post.id}. {post.body}</div>
    );
};

export default PostComponent;