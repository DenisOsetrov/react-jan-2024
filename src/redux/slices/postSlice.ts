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
    'postSlice/loadPosts', // postSlice/loadPosts' означає: postSlice - ім'я слайсу,
                                    // loadPosts - дія, яка завантажує пости.
    async (_, thunkAPI) => {
                              // thunkAPI від Redux Toolkit у функцію асинхронної дії (thunk) і містить кілька
                              // корисних методів і властивостей:
                              // dispatch: метод, який дозволяє відправляти (dispatch) інші дії.
                              // getState: метод, який повертає поточний стан Redux.
                              // extra: об'єкт, який містить додаткові параметри, передані у thunk під час його створення.
                              // requestId: унікальний ідентифікатор для поточного запиту thunk.
                              // signal: об'єкт AbortSignal, який дозволяє скасувати (abort) асинхронну операцію.
                              // rejectWithValue: метод, який дозволяє відхилити (reject) thunk з певним значенням, яке може бути використано в редюсері.
                              // fulfillWithValue: метод, який дозволяє успішно виконати (fulfill) thunk з певним значенням.
        try {
            const posts = await postService.getAll();
            return posts;
            // return await postService.getAll(); // щоб уникнути помилки
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