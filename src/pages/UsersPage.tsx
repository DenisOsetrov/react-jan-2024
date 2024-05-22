import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import UserComponent from "../components/UserComponent";
import usersService from "../services/users-api-service/users.service";


const UsersPage: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        usersService.getAllUsers().then(value => {
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
