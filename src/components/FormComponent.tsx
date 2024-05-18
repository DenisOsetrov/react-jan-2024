import React, {FC} from 'react';
import {useForm} from "react-hook-form";

interface IFormProps {
    title: string;
    body: string;
    userId: number;
}

const FormComponent: FC = () => {

    // 1. Використовуємо useForm і створюємо інтерфейс IFormProps
    // 2. Зі змінної form деструктуризуємо стантартний об'єкт register, метод handleSubmit,  і об'єкт formState -
    // для виведення помилок.
    // 3. ВВодимо в input і в форму деструктуризовані об'єкти
    // 4. з функції handleSubmit виносимо колбек функцію в окрему змінну

    let {
        register,
        handleSubmit,
        formState: {errors}} = useForm<IFormProps>();


    const saveValue = (formValue: IFormProps) => {
        console.log(formValue)  // виводить заповнений об'єкт в консоль
    }


    return (
        <div>


            <form onSubmit={handleSubmit(saveValue)}>
                {/*в середині об'єкту register є об'єкт option*/}
                <input type={"text"} {...register(
                    'title',
                    {
                        required: {  //обов'язкове для заповнення поле
                            value: true,
                            message: 'This field is required'
                        },
                        maxLength: {
                            value: 10,
                            message: 'Max length is 10'
                        },
                        minLength: {
                            value: 2,
                            message: 'Mim length is 2'
                        }
                    }
                )}/>
                <br/>

                {/*виведемо помилки*/}
                <div>
                    {/*{errors.title?.message} - це перший варіант*/}
                    {errors.title && <span>{errors.title.message}</span>}
                </div>

                <input type={"text"} {...register('body')}/>
                <br/>

                <input type={"number"} {...register('userId')}/>
                <br/>

                <button>sent</button>
            </form>
        </div>
    );
};
export default FormComponent;