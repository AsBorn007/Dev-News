import { createSlice } from "@reduxjs/toolkit";
import { fetchNewsthunkData } from "../Thunk/fatchNewsthunk";
const initialState = {
    NewsDataArray:[],
    loading:false,
    error:null
}

const NewsSlicer =  createSlice({
    name:'news',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchNewsthunkData.pending, (state,action)=>{
            state.loading = true
        })
        builder.addCase(fetchNewsthunkData.fulfilled, (state,action)=>{
            state.NewsDataArray = action.payload
             state.loading = false
        })
        builder.addCase(fetchNewsthunkData.rejected, (state,action)=>{
            state.loading = false
            state.error = action.error.message;
        })
    }
})

export {
    fetchNewsthunkData
}
export default NewsSlicer.reducer