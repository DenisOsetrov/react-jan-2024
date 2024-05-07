import React, {FC} from 'react';
import './App.css';
// import Users from "./components/users/Users";
import PostsComponent from "./components/posts/PostsComponent";


const App: FC = () => {
    return (
        <>
            <PostsComponent/>
            {/*<Users/>*/}

        </>
    );
}

export default App;