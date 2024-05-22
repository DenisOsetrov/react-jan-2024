import {AxiosResponse} from "axios";
import {IPostModel} from "../../models/IPostModel";
import axiosInstance from "../api.service";

const postsService = {
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get("/posts");
    }
}

export default postsService;