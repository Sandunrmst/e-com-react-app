import Header from "../Componrnts/Header/Header"
import Footer from "../Componrnts/Footer/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="overflow-hidden w-screen h-screen">
        <Header/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default MainLayout