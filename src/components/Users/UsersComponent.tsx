import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import UserComponent from "./UserComponent";
import usersService from "../../services/users.service";


const UsersComponent: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        usersService.getAllUsers().then(value => {
            // console.log("Posts data:", value.data);
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


export default UsersComponent;