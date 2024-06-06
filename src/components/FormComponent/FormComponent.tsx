import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IAuthDataModel} from "../../models/IAuthDataModel";
import {authService} from "../../services/api.service";

const FormComponent = () => {

    const {handleSubmit, register} =
        useForm<IAuthDataModel>({
            defaultValues: {            // дефолтне зн.в інпутах для логінації
                username: 'user12_12',
                password: 'P@$$word1'
            }});

    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    // побудуємо функцію для handleSubmit. За допомогою цих даних відбув. аутертифікація
    const authenticate = async (formData: IAuthDataModel) => {
        const isAuth = await authService.authentication(formData); // зареєстрований чи ні!
        setIsAuthState(isAuth); // якщо залогінений, зміни false на true
    }

    return (
        <div>
            <h3> Login form</h3>
            <div>
                {
                    isAuthState ? <span>ok!</span> : <span>not ok!</span>  // якщо зареєстрований, то ок, в іншому
                    // випадну - not ok!
                }
            </div>

            <form onSubmit={handleSubmit(authenticate)}>

                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button > Auth form</button>
            </form>
        </div>
    );
};

export default FormComponent;