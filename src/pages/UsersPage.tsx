import React, {useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {userApiService} from "../services/api.service";

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
                {users.map(user => (
                    <li key={user.id}>
                        <h3>{user.id}. {user.name}</h3>
                        <p>Email: {user.email}. Phone: {user.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;
