import React, {FC} from 'react';
import {UserBasicModel} from "../../models/basic-models/UserBasicModel";

interface IProps {
    user: UserBasicModel;
    choseUser: (id:number) => void;
}
const UserComponent: FC <IProps> = ({user,choseUser}) => {
    return (
        <div>
            {user.id} {user.firstName} {user.lastName}
            <button onClick = {() => {
                choseUser(user.id);
            }}>show posts this user
            </button>
        </div>
    );
};

export default UserComponent;