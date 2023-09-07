import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../Store/ReduxSlice/userSlice'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const logout = ()=>{
    dispatch(removeUser())
    navigate('/profile')
  }

  return (
    <div>
      <h1>Admin</h1>
      <br/>
      <button className='p-2 bg-red-400' onClick={logout}>Log Out</button>
    </div>
    
  )
}

export default Admin