import React, {FC} from 'react';
import {useForm} from "react-hook-form";

interface  IFormProps {
    title: string;
    body: string;
    userId: number;
}
const FormComponent:FC = () => {

    // 1. Використовуємо useForm і створюємо інтерфейс IFormProps
    // 2. Зі змінної form деструктуризуємо стантартний об'єкт register і метод handleSubmit.
    // 3. ВВодимо в input і в форму деструктуризовані об'єкти
    // 4. з функції handleSubmit виносимо колбек функцію в окрему змінну

    const form = useForm<IFormProps>();

    // в об'єкті useForm() (form) є , багато об'єктів, ми деструктуруємо {register}, і метод handleSubmit
    const {register, handleSubmit} = form;
    console.log(form)

    const saveValue = (formValue:IFormProps) => {
        console.log(formValue) }


return (
    <div>

        {/*/!*до форми додаємо подію з функцією handleSubmit*!/*/}
        {/*<form onSubmit={handleSubmit((formValue) => {*/}
        {/*    console.log(formValue) // formValue - назва довільна; спрацьовує після заповнення форми / {"title": "qwe",*/}
        {/*    // "body": "asd", "userId": "3"}*/}
        {/*    //винесемо колбек вище, а замість неї використаємо змінну*/}
        {/*})}>*/}

        <form onSubmit={handleSubmit(saveValue)}>

            <input type={"text"} {...register('title')}/>
            <input type={"text"} {...register('body')}/>
            <input type={"number"} {...register('userId')}/>
            <button >sent</button>
        </form>
    </div>
);
};
export default FormComponent;