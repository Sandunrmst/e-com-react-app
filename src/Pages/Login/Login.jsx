import { collection, getDocs, query, where } from "firebase/firestore"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import db from "../../Firebase/firebase"
import { addUsers } from "../../Store/ReduxSlice/userSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const dispatch = useDispatch()

  const username = useRef()
  const password = useRef()

  const navigate = useNavigate()

  const loginSubmit = ()=> {
      const q = query(collection(db, "users"), where("username", "==", 'admin'));

      getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            dispatch(addUsers(doc.data()));
        });
        navigate("/admin")
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  return (
    <div>
      <input ref={username} type="text" placeholder="username"/>
      <input ref={password} type="password" placeholder="password"/>
      <button onClick={loginSubmit}>Login</button>
    </div>
  )
}

export default Login