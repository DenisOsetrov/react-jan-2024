import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";

import styles from './FormComponent.module.css';
import {IPostResponseModel} from "../models/IPostResponseModel";
import {IFormModel} from "../models/IFormModel";
import {postServices} from "../services/api.services";


const FormComponent: FC = () => {

    // 1. Використовуємо useForm і створюємо інтерфейс IFormProps
    // 2. Зі змінної form деструктуризуємо стантартний об'єкт register, метод handleSubmit,  і об'єкт formState -
    // для виведення помилок, isValid - перевіряє форму на валідність.
    // 3. ВВодимо в input і в форму деструктуризовані об'єкти
    // 4. з функції handleSubmit виносимо колбек функцію в окрему змінну
    // 5. додаємо 2 бібліотеки в dependencies: "joi", "@hookform/resolvers"
    // 6. створимо директорію validators і подудуємо там postValidator
    // 7 Створимо UseState, щоб відобразити отриману відповідь і передаємо в then setPostResponse
    // 8. Створюємо сервіси і додаємо бібліотеку axios

    const {
        register,
        handleSubmit,
        formState: {errors} //  formState: {errors, isValid - чи валідна форма},
    } = useForm<IFormModel>({mode: "all", resolver: joiResolver(postValidator)});   // {mode} - як слідкувати! resolve
    // - слідкуватиме за формою


    const [post, setPost] = useState<IPostResponseModel | null>(null)

    const saveValue = (post: IFormModel) => {
        // console.log(post)  // виводить заповнений об'єкт в консоль, що відповідає валідації.
        // formValue - диструктуруємо {title, body, userId}}

        postServices.savePost(post)
            // .then((value) => console.log(value.data));  // {"title": "qwe","body":"asd","userId":35,"id": 101}
            .then((value) => setPost(value.data))
    }


    return (
        <div>
            <h2 style={{textAlign: 'center', background: 'rgba(220, 218, 218, 0.79)', margin: 0, fontSize: '30px', padding: '20px'}}>Завдання: заповни форму, дотримуючися вимог валідації, і отримай відповідь!</h2>
            <div className={styles.formWrapper}>
                <div className={styles.formContainer}>
                    <h2>Post of user</h2>
                    <form onSubmit={handleSubmit(saveValue)}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                <span className={styles.labelText}>Title:</span>
                                <input type="text" {...register('title')} className={styles.input}/>
                            </label>
                            {errors.title && <div className={styles.errorMessage}>{errors.title.message}</div>}
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                <span className={styles.labelText}>Body:</span>
                                <input type="text" {...register('body')} className={styles.input}/>
                            </label>
                            {errors.body && <div className={styles.errorMessage}>{errors.body.message}</div>}
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                <span className={styles.labelText}>User ID:</span>
                                <input type="text" {...register('userId')} className={styles.input}/>
                            </label>
                            {errors.userId && <div className={styles.errorMessage}>{errors.userId.message}</div>}
                        </div>

                        <button type="submit" className={styles.button}>Send to post</button>
                    </form>
                </div>

                {/* Відображення блоку з відповіддю тільки якщо є значення у post */}
                {post && (
                    <div className={styles.responseContainer}>
                        <h2>Post response</h2>
                        <h3>Saved post: {post.id}</h3>
                        <h3>Title: {post.title}</h3>
                        <h3>Body: {post.body}</h3>
                    </div>
                )}
            </div>
        </div>
    );
}
export default FormComponent;