import React, {FC} from 'react';
import {PostModel} from "../../models/post";


interface IProps {
    post: PostModel
}

type IPropsType = IProps & { children?: React.ReactNode };

const PostComponent: FC<IPropsType> = ({post}) => {
    return (
        <div>
            <h3>Post №{post.id}. Small description: "{post.title}"</h3>
            <p>{post.body}</p>
            <p>{post.tags && Array.isArray(post.tags) ? post.tags.join(', ') : ''}</p>
        </div>
    );
};

export default PostComponent;