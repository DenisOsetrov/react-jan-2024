import React, {FC, useState} from 'react';
import './App.css';
import UsersComponent from "./components/users-component/UsersComponent";
import PostsComponent from "./components/posts-component/PostsComponent";

const App: FC = () => {

    const [userId, setUserId] = useState<number>(0);
    const choseUser = (id: number) => {
        setUserId(id);
    }

    return (
        <>
            <UsersComponent choseUser={choseUser}/>

            {
                !!userId && <PostsComponent userId={userId}/>
            }

        </>
    );
}

export default App;