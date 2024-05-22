import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {userApiService} from "../services/api.service";
import UserComponent from "../components/UserComponent";

const UsersPage = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        userApiService.getAllUsers().then(value => {
            setUsers(value.data);
        })
    }, []);

    return (
        <div>

            <h2>Users</h2>

            <ul>
                {users.map(user => (<UserComponent user={user} key={user.id}/>))}
            </ul>

        </div>
    );
};

export default UsersPage;
