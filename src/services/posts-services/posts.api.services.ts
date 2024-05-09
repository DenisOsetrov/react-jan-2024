import {PostsResponseModel} from "../../models/response-models/PostsResponseModel";

const getAllPostsByUserId = (id:number): Promise<PostsResponseModel> => {
    return fetch('https://dummyjson.com/posts/user/'+ id)
        .then((value) => value.json())
}

export {
    getAllPostsByUserId
}

// перевести в Аxios!!!! + CSS