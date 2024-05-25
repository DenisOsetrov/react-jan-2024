import {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import axiosInstance from "./api.service";


const usersService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get("/users");
    },
    // приклад з async та await функцією
//     getUserByUserId: async (userId: number): Promise<AxiosResponse<IUserModel>> => {
//         return await axiosInstance.get(`/users/${userId}`)
// }
}

export default usersService;