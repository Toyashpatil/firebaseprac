import React, {useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import authContext from '../context/authContext'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const Home = () => {
  
  const navigate=useNavigate();
  const {uId,getData,logOut,setUId}=useContext(authContext);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("signinSuccessfull")
        // ...
      } else {
        // User is signed out
        // ...
        navigate("/login")
      }
    });
  }, [])


  return (
    <div>
      {uId}
      <button onClick={logOut}>LogOut</button>
    </div>
  )
}

export default Home