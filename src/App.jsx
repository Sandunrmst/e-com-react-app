import Header from "./Componrnts/Header/Header";
import Footer from "./Componrnts/Footer/Footer";
import AppRouter from "./Routers/AppRouter";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import getDataDocument from "./Utils/dataFetch/getDataDocument";
import { addUsers, removeUser, userSelector } from "./Store/ReduxSlice/userSlice";


function App() {

  const dispatch = useDispatch()
  const userData = useSelector(userSelector)

  // console.log(userData)

  useEffect(()=>{
    const userCheck = onAuthStateChanged(auth, (user) => {
      if(user){
        const uid = user.uid;
        console.log("User Id: ",uid)
        getDataDocument('users',uid, (dataSet) => {
          dispatch(addUsers(dataSet))
        })

      }else{
        console.log("No user")
        dispatch(removeUser());
      }
    });

  return () => userCheck;

  }, [])

  return (
    <AppRouter />
  )
}

export default App