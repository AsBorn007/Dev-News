import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNewsthunkData } from "../ReduxStore/Thunk/fatchNewsthunk"
import NewsCard from "./NewsCard"


const NewsData = () => {
    const newsState= useSelector(state=>state.NewsSlicer.NewsDataArray)
    console.log(newsState,"fsdfsd")
    const dispatch  = useDispatch()
    useEffect(()=>{
        dispatch(fetchNewsthunkData())
    },[dispatch])
  return (
    <div>
   {newsState.map((item , i)=>(
    <NewsCard itemDetails={item} key={item.i}/>
   ))}

    </div>
  )
}

export default NewsData
