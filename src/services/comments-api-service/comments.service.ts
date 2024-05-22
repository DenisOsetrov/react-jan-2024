import {AxiosResponse} from "axios";
import {ICommentModel} from "../../models/ICommentModel";
import axiosInstance from "../api.service";



const commentsService = {
    getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> => {
    return axiosInstance.get("/comments");
}
};

export default commentsService;