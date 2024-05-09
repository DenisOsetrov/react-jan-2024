import {UsersResponseModel} from "../../models/response-models/UsersResponseModel";
import axios from "axios";


// const  getAllUsers = (): Promise<UsersResponseModel> => {
//     return fetch('https://dummyjson.com/users')
//         .then(value => value.json())
// }

// axiosInstance - стандартна назва базового об'єкта.
const axiosInstance = axios.create ({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type': 'application/json'}
})

const getAllUsers = (): Promise<UsersResponseModel> => {
    return axiosInstance.get('/users')
        .then(response => response.data); // axios повертає багато об'єктів, тому вказуємо, лише на потрібний - data!
};



export {
    getAllUsers
}