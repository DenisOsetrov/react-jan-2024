import React, {useEffect, useState} from 'react';
import {UsersResponseModel} from "../../models/response-models/UsersResponseModel";
import {getAllUsers} from "../../services/user-services/users.api.services";
import {UserBasicModel} from "../../models/basic-models/UserBasicModel";

const UsersComponent = () => {

    const [users, setUsers] = useState<UserBasicModel[]>([])

    useEffect(() => {
        getAllUsers().then((value: UsersResponseModel) => console.log(value.users))

    }, []);

    return (
        <div>

        </div>
    );
};

export default UsersComponent;