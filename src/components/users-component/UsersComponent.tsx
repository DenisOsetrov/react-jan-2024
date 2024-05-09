import React, {FC, useEffect, useState} from 'react';
import {getAllUsers} from "../../services/users-services/users.api.services";
import {UserBasicModel} from "../../models/basic-models/UserBasicModel";
import UserComponent from "../user-component/UserComponent";

interface IProps {
    choseUser: (id:number) => void;
}

const UsersComponent: FC <IProps> = ({choseUser}) => {

    const [users, setUsers] = useState<UserBasicModel[]>([])

    useEffect(() => {
        getAllUsers().then((value) => setUsers([...value.users]))    // setUsers(value.users)) - не
        // працює, бо має бути нове посилання, а ... і робить новий об'єкт на основі старого.

    }, []);

    return (
        <div>
            {
                users.map(user =>
                    <UserComponent
                        key={user.id}
                        user={user}
                        choseUser={choseUser}
                    /> )
            }
        </div>
    );
};

export default UsersComponent;