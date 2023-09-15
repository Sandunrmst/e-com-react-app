
import { useState } from 'react'
import userRegister from '../../Utils/auth/register'
import { signOut } from '@firebase/auth'
import { auth } from '../../Firebase/firebase'
import userLogin from '../../Utils/auth/login'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [select,setSelect] = useState('login')


  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>

      {select === "login" ? <LoginComponent/> : select === "register" ? <RegisterComponent/> : null}
      
      
      {/*change login or register*/}
      {select === "login" ? (
        <p className='mt-5'>Don't have an account? <span className='cursor-pointer' onClick={()=>setSelect('register')}>Sign Up</span></p>
      ): select === "register" ? (

        <p className='mt-5'>Already have an account <span className='cursor-pointer' onClick={()=>setSelect('login')}>Sign In</span></p>
      ): null}


    </div>
  )
}

export default Login

/**
 * 
 * 
 * 
 * 
 */

const LoginComponent = ()=> {
  
  const navigate = useNavigate()
  const loginHandle = (e)=>{
    e.preventDefault()

    const email = e.target["email"].value
    const password = e.target["password"].value

    // console.log(email, password)
    //userLogin(email, password, navigate) //call user login funtion
  }
  return(
    <div className='w-[90%] p-5 shadow-lg flex flex-col items-center'>
      <h1 className='text-3xl font-bold md-7'>Login</h1>
      <form onSubmit={loginHandle} className='w-full flex flex-col items-center'>

        <LoginInputBox type="email" name='email' label='Email' placeholder="Enter Your Email"/>
        <LoginInputBox type="password" name='password' label='password' placeholder="Enter Your Password"/>

        <button className='font-semibold bg-orange-300 hover:bg-orange-400 rounded-lg px-5 py-2' type='submit'>Login</button>
      </form>
    </div>
  )
}

/** 
 * 
 * 
 * 
 * 
 */

const RegisterComponent = ()=>{

  const registerHandle = (e)=>{
    e.preventDefault()
    const name = `${e.target[0].value} ${e.target[1].value}`
    const email = e.target[2].value
    const address = e.target[3].value
    const password = e.target[4].value
    const cPassword = e.target[5].value
    const phoneNumber = e.target[6].value
    const profileImage = e.target[7].value
    
    // console.log("With Object",{name,email,address,password,cPassword,phoneNumber})
    // console.log("without object",name,email,address,password,cPassword,phoneNumber)
    if(password === cPassword){
      userRegister(email,password,name,address,phoneNumber,profileImage)
    }
  }

  return(
    <div>
      <h1>Register</h1>
      <form onSubmit={registerHandle}>
      <div>
        <input type='text' placeholder='Your First Name'/>
        <input type='text' placeholder='Your Last Name'/>
      </div>
      <input type='text' placeholder='Your email Address'/>
      <input type='text' placeholder='Your Address'/>
      <input type='password' placeholder='Password'/>
      <input type='password' placeholder='Confrim Password'/>
      <input type='text' placeholder='Your Phone Number'/>
      <input type='text' placeholder='Your Profile Image'/>
      <button type='submit'>Register</button>
      </form>

    </div>
  )
}

const LoginInputBox = ({inputType, name, label, placeholder})=>{

  return <div className='relative w-[90%] p-3 border border-gray-400 rounded-[6px] m-3'>
    <label className='absolute top-[-12px] left-2 bg-white px-2 font-medium'>{label}</label>
    <input className='outline-none w-full' type={inputType} name={name} placeholder={placeholder}/>
  </div>
}