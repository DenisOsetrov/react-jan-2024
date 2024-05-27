export interface PostBasicModel {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags: string[],
    reactions: {
        likes: number,
        dislikes: number
    }
}