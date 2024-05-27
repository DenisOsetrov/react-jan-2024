import {PostsResponseModel} from "../../models/response-models/PostsResponseModel";
import axios from "axios";


// axiosInstance - стандартна назва базового об'єкта.
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type': 'application/json/'}
})

// розділяємо url на частини: базову і змінну і додаємо id!
const getAllPostsByUserId = async (id: number): Promise<PostsResponseModel> => {
    const response = await axiosInstance.get('/posts/user/' + id);
    return response.data;  // повертаємо 1 об'єкт axios, а не всі!
}


export {
    getAllPostsByUserId
}