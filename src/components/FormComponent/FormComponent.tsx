import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IAuthDataModel} from "../../models/IAuthDataModel";
import {authService} from "../../services/api.service";

import styles from './FormComponent.module.css';

const FormComponent = () => {

    const { handleSubmit, register } = useForm<IAuthDataModel>({
        defaultValues: {
            username: 'user12_12',
            password: 'P@$$word1'
        }
    });

    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    const authenticate = async (formData: IAuthDataModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
    }

    return (
        <div className={styles.form}>
            <h3>Login form</h3>
            <div>
                {isAuthState ? <span>ok!</span> : <span>not ok!</span>}
            </div>

            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')} placeholder="Username" />
                <input type="text" {...register('password')} placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    );
};

export default FormComponent;