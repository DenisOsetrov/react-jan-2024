import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "./PostComponent";

interface IProps {
    posts: IPostModel[];
}

const PostsComponent: FC<IProps> = ({posts}) => {


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

export default PostsComponent;