import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from '../Slicers/newsSlice.js'
const store = configureStore({
    reducer:{
        NewsSlicer :  NewsReducer
    }
})
export default store