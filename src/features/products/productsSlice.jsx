import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_,thunkAPI) =>{
        try{
            const res = await axios(`${BASE_URL}/products`)
            return res.data;
        } catch(err){
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

const productsSlice = createSlice({
    name: 'products', 
    initialState: {
        list: [],
        // newUser: null - поля для хранения данных нового пользователя 
    },
    // reducers:{
    //     addUser(state,action){
    //         state.newUser = action.payload
    //     }
    // } - если бы не было Async операции, тогда был здесь прописывался reducers
    extraReducers: (builder) =>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.list= action.payload
        })
    }
})

export default productsSlice.reducer