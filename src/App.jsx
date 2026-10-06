
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import { lazy, Suspense } from 'react'
import Loader from './Components/Loader.jsx'

const Home =  lazy(()=>import('./Pages/Home.jsx'))
const NewsDetails = lazy(()=> import('./Pages/NewsDetails'))
const Blog = lazy(()=> import('./Pages/Blog.jsx'))
const Category = lazy(()=> import('./Pages/Category.jsx'))

  const router = createBrowserRouter([
  
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
      path:"/",
      element:<Home />
    },
    {
      path:"/newdetails",
      element:<NewsDetails />
    },
    {
      path:"/blog",
      element:<Blog />
    },
    {
      path:"/category",
      element:<Category />
    },
      ]
    }
    
  ])


export const App = () => {
 
  return(
    <Suspense fallback={<Loader/>}>
      <RouterProvider router={router}/>
  </Suspense>
  ) 
}

