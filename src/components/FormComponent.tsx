import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";

interface IFormProps {
    title: string;
    body: string;
    userId: number;
}

const FormComponent: FC = () => {

    // 1. Використовуємо useForm і створюємо інтерфейс IFormProps
    // 2. Зі змінної form деструктуризуємо стантартний об'єкт register, метод handleSubmit,  і об'єкт formState -
    // для виведення помилок, isValid - перевіряє форму на валідність.
    // 3. ВВодимо в input і в форму деструктуризовані об'єкти
    // 4. з функції handleSubmit виносимо колбек функцію в окрему змінну
    // 5. додаємо 2 бібліотеки в dependencies: "joi", "@hookform/resolvers"
    // 6. створимо директорію validators і подудуємо там postValidator

    let {
        register,
        handleSubmit,
        formState: {errors} //  formState: {errors, isValid - чи валідна форма},
    } = useForm<IFormProps>({mode:"all", resolver: joiResolver(postValidator)});   // {mode} - як слідкувати! resolve
    // - слідкуватиме за формою


    const saveValue = (formValue: IFormProps) => {
        console.log(formValue)  // виводить заповнений об'єкт в консоль, що відповідає валідації
    }


    return (
        <div>

            <form onSubmit={handleSubmit(saveValue)}>

                <input type={"text"} {...register('title')}/>
                <br/>
                {errors.title && <div>{errors.title.message}</div>}
                <input type={"text"} {...register('body')}/>
                <br/>

                <input type={"number"} {...register('userId')}/>
                <br/>

                <button>sent</button>
            </form>
        </div>
    );
};


// Гарна повна форма від GPT
// const FormComponent = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm({
//         resolver: joiResolver(postValidator)
//     });
//
//     const saveValue = (data) => {
//         console.log(data);
//     };
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit(saveValue)}>
//                 <label>
//                     Title:
//                     <input type="text" {...register('title')} />
//                 </label>
//                 <br />
//                 {errors.title && <div style={{ color: 'red' }}>{errors.title.message}</div>}
//
//                 <label>
//                     Body:
//                     <input type="text" {...register('body')} />
//                 </label>
//                 <br />
//                 {errors.body && <div style={{ color: 'red' }}>{errors.body.message}</div>}
//
//                 <label>
//                     User ID:
//                     <input type="number" {...register('userId')} />
//                 </label>
//                 <br />
//                 {errors.userId && <div style={{ color: 'red' }}>{errors.userId.message}</div>}
//
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };
export default FormComponent;