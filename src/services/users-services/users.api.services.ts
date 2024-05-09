import {UsersResponseModel} from "../../models/response-models/UsersResponseModel";


const  getAllUsers = (): Promise<UsersResponseModel> => {
    return fetch('https://dummyjson.com/users')
        .then(value => value.json())
}

// // axiosInstance - стандартна назва базового об'єкта.
// const axiosInstance = axios.create ({
//     baseURL: 'https://dummyjson.com',
//     headers: {'Content-Type': 'application/json'}
// })
//
// const getAllUsers = (): Promise<AxiosResponse<UsersResponseModel>> => {
//     return axiosInstance.get('/users')
// }
// + import



export {
    getAllUsers
}