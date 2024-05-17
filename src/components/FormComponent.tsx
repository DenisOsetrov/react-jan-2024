import React, {FC, FormEvent, useState} from 'react';


interface ISignUpFormState {
    title: string;
    body: string;
    userId: number
}
const FormComponent:FC = () => {

    const [formState, setFormState] = useState<ISignUpFormState>({
        title: '',
        body: '',
        userId: 1
    })

    // функція для форми
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();   // щоб уникнути перезавантаження сторінки при натисканні на кнопку "sent"
        // всторимо об'єкт з заповненої форми
        let post = {
            title: formState.title,
            body: formState.body,
            userId: formState.userId
        }
        console.log(post);  // {"title": "qwe", "body": "asd", "userId": 4}
    }

    // функції, що слідкують за станом інпутів. e.target - власник об'єкта події
//     const  handleTitlePostChange = (e: FormEvent<HTMLInputElement>) => {
//         const input = e.target as HTMLInputElement;
//                  // const input = e.currentTarget  // цей варіант теж може бути, вже параметризований!
//                  setFormState({...formState, title: input.value})  // початковий запис - примітивний
//         // setFormState({...formState, [input.name]: input.value})  // динамічний запис, де [input.name] - об'єкт інпут
//                  // зі значенням - title
//                  // console.log(input.value)
//     }
//     const handleBodyPostChange = (e: FormEvent<HTMLInputElement>) => {
//         const input = e.target as HTMLInputElement;
//         setFormState({...formState, [input.name]: input.value})
//         // console.log(input.value)
//     }
//
//     const handleUserIdChange = (e: FormEvent<HTMLInputElement>) => {
//         const input = e.target as HTMLInputElement;
//         setFormState({...formState, [input.name]: parseInt(input.value, 10)})
//         // console.log(input.value)
//     }
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type={"text"} name={"title"} value={formState.title} onChange={handleTitlePostChange}></input>
//                 <input type={"text"} name={"body"} value={formState.body} onChange={handleBodyPostChange}></input>
//                 <input type={"number"} name={"userId"} value={formState.userId} onChange={handleUserIdChange}></input>
//                 <button >sent</button>
//             </form>
//         </div>
//     );
// };


// оновлений варіант коду з динамічним наповненням і функціями. Починаємо з інпутів, з 3 функцій залишаємо 1.
// функції, що слідкують за станом інпутів. e.target - власник об'єкта події
    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        // Отримання посилання на введений елемент
        const input = e.currentTarget;
        // Ініціалізація змінної value з типом string або number на основі значення введеного елемента
        let value: string | number = input.value;

        // Перевірка, чи поле є полем userId, і спроба перетворення його значення на число
        if (input.name === 'userId') {
            // Якщо введене значення не може бути перетворено в число, встановлюється порожній рядок, інакше - число
            value = isNaN(Number(input.value)) ? '' : Number(input.value);
        }

        // Оновлення стану форми з використанням функції зворотнього виклику для забезпечення актуальності попереднього стану
        setFormState(prevState => ({
            ...prevState,
            [input.name]: value
        }));
    }

return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type={"text"} name={"title"} value={formState.title} onChange={handleChange}></input>
            <input type={"text"} name={"body"} value={formState.body} onChange={handleChange}></input>
            <input type={"number"} name={"userId"} value={formState.userId} onChange={handleChange}></input>
            <button >sent</button>
        </form>
    </div>
);
};
export default FormComponent;