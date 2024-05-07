import React from 'react';
import {UserModel} from "../../models/user";


// протипізуємо children для User - може будемо використовувати з подвійним викликом компоненти
export type IUserTypeModel = UserModel & {children?: React.ReactNode}

const User = () => {
    return (
        <div>
            
        </div>
    );
};

export default User;