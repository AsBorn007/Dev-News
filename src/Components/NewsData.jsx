import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNewsthunkData } from "../ReduxStore/Thunk/fatchNewsthunk"
import CardWraper from "./NewsCard"
import Wrapper from "./Common/Wrapper"


const NewsData = () => {
  
    const newsState= useSelector(state=>state.NewsSlicer.NewsDataArray)
    
    const dispatch  = useDispatch()

    useEffect(()=>{
        dispatch(fetchNewsthunkData())
    },[dispatch])
  return (
    <Wrapper>
      <h2 className="text-3xl text-white mt-6 mb-6 uppercase font-body" >Lets Read the News</h2> 
        <div className="grid grid-cols-4 gap-2.5">
      {newsState.map((item , i)=>(
        <CardWraper itemDetails={item} key={item.i}/>
      ))}
     </div>
    </Wrapper>
  )
}

export default NewsData
