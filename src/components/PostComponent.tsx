import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {useNavigate} from "react-router-dom";
import './PostComponent.css';


interface IProps {
    post: IPostModel;
}

const PostComponent: FC<IProps> = ({post}) => {
    const navigate = useNavigate();

    const handleViewComments = (postId: string) => {
        navigate(`/posts/${postId}/comments`);
    };

    return (
        <div>
            <li>
                <h3>{post.id}. {post.title}</h3>
                <p>{post.body}</p>

                <button className="button" onClick={() => {
                    handleViewComments(post.id.toString())
                }}>Comments this post
                </button>

            </li>
        </div>
    );
};

export default PostComponent;