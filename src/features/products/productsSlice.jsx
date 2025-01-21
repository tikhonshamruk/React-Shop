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
        productss: [],
        filtered: [],
        // newUser: null - поля для хранения данных нового пользователя 
    },
    reducers:{
        filterByPrice(state, action){
            state.filtered = state.productss.filter(({price})=>price < action.payload)
        }
    },
    // reducers:{
    //     addUser(state,action){
    //         state.newUser = action.payload
    //     }
    // } - если бы не было Async операции, тогда был здесь прописывался reducers
    extraReducers: (builder) =>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.productss= action.payload
        })
    }
})

export const {filterByPrice} = productsSlice.actions
export default productsSlice.reducer