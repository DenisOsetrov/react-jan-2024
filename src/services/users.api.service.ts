import axios, {AxiosResponse} from "axios";
import {UserModel} from "../models/user";


// axiosInstance - стандартна назва базового об'єкта.
let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'}
})

// беремо axiosInstance - з базовою url - і додаємо /users - для отримання всіє юзерів
const getAllUsers = ():Promise <AxiosResponse<UserModel[]>> => {
    return axiosInstance.get('/users')
    //     .then(value => value.data) // !!! Це важливо! Тут ми дістаємо 1 об'єкт з багатьох, тому після
    // // розкоментування треба змінювати компоненту UsersComponent, бо там ми отримуємо від axios декілька об'ктів і
    // // вже тоді з ними працюємо
}


export {
   getAllUsers
}