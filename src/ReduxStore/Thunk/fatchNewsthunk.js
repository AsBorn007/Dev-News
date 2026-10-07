import { createAsyncThunk } from "@reduxjs/toolkit"
const fetchNewsthunkData = createAsyncThunk(
    'fetchNewsthunkData/News',
    async (page) => {
        
        const API_KEY = import.meta.env.VITE_NEWS_API

        let response =  await fetch( `https://gnews.io/api/v4/search?q=programming OR software development OR web development&lang=en&sortby=publishedAt&apikey=${API_KEY}&max=8&page=2`)

        let data = await response.json()

        return data.articles

    }
)
export{
    fetchNewsthunkData
}   