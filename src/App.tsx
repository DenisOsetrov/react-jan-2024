import React, {FC} from 'react';
import './App.css';
import UsersComponent from "./components/UsersComponent";
import PostsComponent from "./components/PostsComponent";
import CommentsComponent from "./components/CommentsComponent";

const App: FC = () => {
    return (
        <>
            <UsersComponent/>
            <PostsComponent/>
            <CommentsComponent/>

        </>
    );
}

export default App;
