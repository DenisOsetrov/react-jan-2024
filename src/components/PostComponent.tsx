import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";


interface IProps {
    post: IPostModel;
}
const PostComponent: FC <IProps> = ({post}) => {
    return (
        <div>
            <li key={post.id}>
                <h3>{post.id}. {post.title}</h3>
                <p>{post.body}</p>
            </li>
        </div>
    );
};

export default PostComponent;