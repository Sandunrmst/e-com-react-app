import { useSelector } from "react-redux"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { userSelector } from "../Store/ReduxSlice/userSlice"
import { useEffect } from "react"


const AdminProtected = () => {
  const admin = false

    const userData = useSelector(userSelector)
    const navigate = useNavigate()
    // console.log(user)

    useEffect(()=>{
      if(userData.name){
        if(!(userData.name ==='default')){
          if(!(userData.role === 'admin')){
            navigate('/404')
          }
        }

      }else{
        navigate('/404')
      }
    },[userData])

    return <Outlet />

    // if(user.role){
    //     if(user.role === "admin"){
    //         return <Outlet />
    //       }else{
    //         return <Navigate to='/404' />
    //       }
    // }else {
    //     return <Navigate to="/404" />
    // }
}

export default AdminProtected