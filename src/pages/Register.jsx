import React, { useContext } from 'react'
import authContext from '../context/authContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const {loggingIn}=useContext(authContext)
  const navigate=useNavigate();

  const entry=async ()=>{
    await loggingIn();
    navigate("/")
  }

  return (
    <div className='text-center'>
      <button onClick={entry}>newLogin</button>
    </div>
  )
}

export default Register