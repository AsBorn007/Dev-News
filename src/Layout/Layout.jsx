import Header from "../Components/Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer/Footer"

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <Outlet>{children}</Outlet>
      <Footer/>

    </div>
  )
}

export default Layout
