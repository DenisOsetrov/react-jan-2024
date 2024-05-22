import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";

interface IProps {
    user:IUserModel;
}

const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <li key={user.id}>
                <h3>{user.id}. {user.name}</h3>
                <p>Email: {user.email}. Phone: {user.phone}</p>
            </li>
        </div>
    );
};

export default UserComponent;