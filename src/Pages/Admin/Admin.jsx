import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logout from '../../Utils/auth/logout'

const Admin = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  return (
    <div>
      <h1>Admin</h1>
      <br/>
      <button className='p-2 bg-red-400' onClick={logout}>Log Out</button>
    </div>
    
  )
}

export default Admin