import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async (_,thunkAPI) =>{
        try{
            const res = await axios(`${BASE_URL}/categories`)
            return res.data;
        } catch(err){
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

const categoriesSlice = createSlice({
    name: 'categories', 
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
        builder.addCase(getCategories.fulfilled,(state,action)=>{
            state.list= action.payload
        })
    }
})

export default categoriesSlice.reducer