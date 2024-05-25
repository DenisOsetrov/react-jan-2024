import {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import axiosInstance from "./api.service";

const postsService = {
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get("/posts");
    },
    getPostsByUserId: async (userId: string): Promise<AxiosResponse<IPostModel[]>> => { // пропишемо тип стрінг, щоб
        // при виклику функції не було розбіжностей
        return await axiosInstance.get(`/users/${userId}/posts`)
    }
}

export default postsService;