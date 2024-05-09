import {PostsResponseModel} from "../../models/response-models/PostsResponseModel";

const getAllPostsByUserId = (id:number): Promise<PostsResponseModel> => {
    return fetch('https://dummyjson.com/posts/user/'+ id)
        .then((value) => value.json())
}

export {
    getAllPostsByUserId
}


// // axiosInstance - стандартна назва базового об'єкта.
// const axiosInstance = axios.create ({
//     baseURL: 'https://dummyjson.com',
//     headers: {'Content-Type': 'application/json'}
// })
//
// const getAllUsers = (): Promise<UsersResponseModel> => {
//     return axiosInstance.get('/users')
//         .then(response => response.data); // axios повертає багато об'єктів, тому вказуємо, лише на потрібний - data!
// };
// // + import
// // перевести в Аxios!!!! + CSS