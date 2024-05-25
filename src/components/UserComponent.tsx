import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {NavLink} from "react-router-dom";

interface IProps {
    user: IUserModel;
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <li>
                <NavLink to={user.id.toString()}><h3>{user.id}. {user.name}</h3></NavLink>
                <p>Email: {user.email}. Phone: {user.phone}</p>
            </li>
        </div>
    );
};

export default UserComponent;