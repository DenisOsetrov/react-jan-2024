import axios, {AxiosResponse} from "axios";
import {IFormModel} from "../models/IFormModel";
import {IPostResponseModel} from "../models/IPostResponseModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json; charset=UTF-8"}
})

// знайомство з interceptors - перехопник - тут! не використовується. Для прикладу!!!
// можемо відхоплювати request i response
                //  axiosInstance.interceptors.request.use(request => {
                //      console.log(request); // отримали об'єкт з купою даних, в які можемо додати щось своє!
                //      request.headers.set({xxx: 'foobar'}) // додаємо до об'єкта header поле - ххх зі заченням 'foobar'
                //      return request;
                //  })

// нам знадобиться лише метод savePost
// так само створюємо const userServices за потреби і експортуємо вже два сервіси - так правильно і зручно!!!
const postServices = {

    getAllPosts: () => {
        return axiosInstance.get('/posts')
    },

    getPostById: (id: number) => {
        return axiosInstance.get(`/posts/${id}`);
    },

    getPostsByUserId: (userId: number) => {
        return axiosInstance.get('/posts?userId=id', {
            params: {
                userId: userId
            }
        })
    },

    savePost: ({title, body, userId}: IFormModel): Promise<AxiosResponse<IPostResponseModel>> => {
        return axiosInstance
            .post(
            '/posts',
            {title, body, userId},
            // {headers: {"Content-Type": "application/json; charset=UTF-8"}} // хедери додали 1 раз при створенні
                        // axios, але можна і тут
    )
            .then(response => {
                console.log(response.data); // Виводимо повну відповідь
                return response;
            })

        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         title: title,
        //         body: body,
        //         userId: userId,
        //     }),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then((response) => response.json())
    }
}

export {
    postServices
}