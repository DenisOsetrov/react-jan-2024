import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "./PostComponent";

interface IProps {
    posts: IPostModel[];
    userId?: string;
}

const PostsComponent: FC<IProps> = ({posts, userId}) => {


    return (
        <div>
            <h2>Posts {userId? `for user ${userId}` : 'for all users'}:</h2>
            <ul>
                {posts.map(post => (
                    <PostComponent key={post.id} post={post}/>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;