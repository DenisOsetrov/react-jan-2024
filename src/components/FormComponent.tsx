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
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {e.preventDefault()}

    // функції, що слідкують за станом інпутів. e.target - власник об'єкта події
    const  handleTitlePostChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setFormState({...formState, title: input.value})
        // console.log(input.value)
    }
    const handleBodyPostChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setFormState({...formState, body: input.value})
        // console.log(input.value)
    }

    const handleUserIdChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setFormState({...formState, userId: parseInt(input.value, 10)})
        // console.log(input.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type={"text"} name={"title"} value={formState.title} onChange={handleTitlePostChange}></input>
                <input type={"text"} name={"body"} value={formState.body} onChange={handleBodyPostChange}></input>
                <input type={"number"} name={"userId"} value={formState.userId} onChange={handleUserIdChange}></input>
                <button >sent</button>
            </form>
        </div>
    );
};

export default FormComponent;