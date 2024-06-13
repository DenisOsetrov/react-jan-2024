import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type CounterStateType = {
    xxx: number
}

const initialState: CounterStateType = {
    xxx: 100
};
export const counter1Slice = createSlice({
    name: "counter1",
    initialState: initialState,
    // reducers - в ньому будуть виконуватися дії
    reducers: {
        increment: (state,
                    action: PayloadAction<number>) => {
            state.xxx = state.xxx + action.payload;
        },
        decrement: (state) => {
            state.xxx = state.xxx - 1;
        },
        reset: (state) => {
            state.xxx = 0;
        },
        donate: (state) => {
            state.xxx += 500;
        }
    }

});

export const {
    increment,
    decrement,
    reset,
    donate
} = counter1Slice.actions
