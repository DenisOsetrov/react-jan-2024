import React, {FC} from 'react';
import UsersComponent from "../components/UsersComponent";
import {Outlet} from "react-router-dom";


const UsersPage: FC = () => {


    return (
        <div>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;
