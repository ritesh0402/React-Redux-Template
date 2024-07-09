import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = 0;

export const counterSlice = createSlice({
   initialState: initialState,
   name: 'counter',
   reducers: {
      increment: (state) => state + 1,
      decrement: (state) => state - 1
   },
   extraReducers: (builder) => {
      builder.addCase(incAsync.fulfilled, (state, action: PayloadAction<number>) => {
         return state += action.payload;
      })
   }
})

export const incAsync = createAsyncThunk(
   'counter/incAsync',
   async (amount: number): Promise<number> => {
      await new Promise<void>((resolve, reject) => {
         setTimeout(resolve, 1000)
      })
      return amount;
   }
)

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
