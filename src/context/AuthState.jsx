import React, { useState } from 'react'
import authContext from './authContext'
import { app, auth, db } from "../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from 'firebase/auth'
import { collection, doc, addDoc, getDocs, query, where, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'


const AuthState = (props) => {

  const [uId, setUId] = useState("")
  const UserRef = collection(db, 'users');
  const navigate = useNavigate();


  const getData = async () => {
    const docRef = doc(db, "users", uId);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
  }


  const createUser = async () => {
    try {
      const usercred = await createUserWithEmailAndPassword(auth, "toyuone@gmail.com", "toyash123#")
      const user = usercred.user;
      console.log(user)
      const userDoc = await addDoc(UserRef, {
        id: usercred.user.uid,
        name: "Tokyo",
        email: "toyuone@gmail.com"
      });
      setUId(userDoc.id)
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    }

  }
  const loggingIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, "toyuone@gmail.com", "toyash123#");
      // Signed in
      const userId = userCredential.user.uid;
      // ... (do something with the user)
      const q = query(UserRef, where("id", "==", userId));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setUId(doc.id,);
      })
    }
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ... (handle the error)
    }
  }

  const logOut = async () => {
    try {
      await signOut(auth);
      // Sign-out successful.
      navigate("/register")
    } catch (error) {
      // An error happened.
      console.error('Error signing out:', error);
    }
  }

  return (
    <authContext.Provider value={{ uId, createUser, loggingIn, getData,logOut,setUId }}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState;