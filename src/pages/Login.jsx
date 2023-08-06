import React, { useContext } from 'react'
import authContext from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {createUser}=useContext(authContext)
  const navigate=useNavigate();
  const userProcess=async()=>{
    await createUser();
    navigate("/")
  }
  return (
    <div className='text-center'>
      <button onClick={userProcess}>Login</button>
    </div>
  )
}

export default Login;