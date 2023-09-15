import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { userSelector } from "../Store/ReduxSlice/userSlice"
import { useEffect, useState } from "react"
import NoUrl from "../Pages/404/NoUrl"


const AdminProtected = () => {
  const admin = false

    const userData = useSelector(userSelector)
    // const navigate = useNavigate()
    // console.log(user)

    const [canView, setCanView] = useState()

    useEffect(()=>{
      if(userData.name){
        if(!(userData.name ==='default')){
          if(userData.role === 'admin'){
            setCanView(true)
          }
        }

      }
    },[userData])

    return canView? <Outlet /> : <NoUrl/>

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