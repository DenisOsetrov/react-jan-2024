import {PostBasicModel} from "../basic-models/PostBasicModel";

export interface PostsResponseModel {
    posts: PostBasicModel [],
    total: number,
    skip: number,
    limit: number
}