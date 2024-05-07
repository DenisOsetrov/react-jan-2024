// беремо axiosInstance - з базовою url - і додаємо /users - для отримання всіє юзерів

import axios, {AxiosResponse} from "axios";
import {ApiResponse} from "../components/posts/PostsComponent";


let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type': 'application/json; charset=UTF-8'}
})

const getAllPosts = (): Promise<AxiosResponse<ApiResponse>> => {
    return axiosInstance.get('/posts');
};


export {
    getAllPosts
}



// або можна повертати один об'єкт з декількома відповідями:
// interface Request {
//     posts: {
//         getAllPosts(): Promise<AxiosResponse<PostModel[]>>;
//     };
//     comments: {
//         getAllComments(): Promise<AxiosResponse<CommentModel[]>>;
//     };
// }
//
// let request: Request = {
//     posts: {
//         getAllPosts: (): Promise<AxiosResponse<PostModel[]>> => {
//             return axiosInstance.get('/posts');
//         }
//     },
//     comments: {
//         getAllComments: (): Promise<AxiosResponse<CommentModel[]>> => {
//             return axiosInstance.get('/comments');
//         }
//     }
// };