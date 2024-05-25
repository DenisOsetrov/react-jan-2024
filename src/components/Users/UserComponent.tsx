import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import {IUserModel} from "../../models/IUserModel";

interface IProps {
    user: IUserModel;
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <li>
                <Link to={`/users/${user.id}`}>
                    <h3>{user.id}. {user.name}</h3>
                </Link>
                <p>Email: {user.email}. Phone: {user.phone}</p>
            </li>
        </div>
    );
};

export default UserComponent;