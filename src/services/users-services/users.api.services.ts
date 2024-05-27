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

const getAllUsers = async (): Promise<UsersResponseModel> => {
    const response = await axiosInstance.get('/users');
    return response.data; // axios повертає багато об'єктів, тому вказуємо, лише на потрібний - data!
};



export {
    getAllUsers
}