import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {postService} from "../../services/api.service";
import {AxiosError} from "axios";
import {IPost} from "../../models/IPost";

type PostSliceType = {
    posts: IPost[];
    isLoaded: boolean;
    error: string | null;
}

const postInitialState: PostSliceType = {
    posts: [],
    isLoaded: false,
    error: null,
}

export const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getAll();
            return posts;
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload;
                state.isLoaded = true;
                state.error = null;
            })
            .addCase(loadPosts.rejected, (state, action) => {
                state.isLoaded = false;
                state.error = action.payload as string || 'Failed to load posts';
            });
    }
});

export const postActions = {
    ...postSlice.actions,
    loadPosts
};