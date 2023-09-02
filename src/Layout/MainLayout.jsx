import Header from "../Componrnts/Header/Header"
import Footer from "../Componrnts/Footer/Footer"
import { Outlet } from "react-router-dom"
import { useRef } from "react"
import PaymentModel from "../Modal/PaymentModel"

const MainLayout = () => {
  const paymentModelRef = useRef(); 
  return (
    <div className="overflow-hidden w-screen h-screen">
        <PaymentModel ref={paymentModelRef}/>
        <Header paymentModelRef={paymentModelRef}/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default MainLayout