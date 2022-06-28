import React,{useState,useEffect} from 'react'

import { onAuthStateChanged } from "firebase/auth";
import { auth , db } from './Firebase/firebaseConfig';
import {  getDocs , collection , query , where } from "firebase/firestore";

import WelcomeRoute from './Routes/WelcomeRoute';
import AppNotVerifEmailRoute from './Routes/AppNotVerifEmailRoute';
import AppRoute from './Routes/AppRoute';
import AppUserInfo from './Routes/AppUserInfo';


function App() {
  const [state,setState] =useState(false)

  const [emailVerified,setEmailVerified] =useState(false)
  const [userInfo,setUserInfo] =useState({"displayName":"","photoURL":""})
  const [Role,setRole]=useState(null)
  
  // useEffect(() => {
  //   onAuthStateChanged(auth, async (user) => {
  //     const Users = collection(db,"Users")
  //     if (user) {
        
  //       setUserInfo({"displayName":user.displayName,"photoURL":user.photoURL})
  //       setState(true)
  //       setEmailVerified(user.emailVerified)
        
  //       const Userq = query(Users,where("Id","==",auth.currentUser.uid));
  //       const UserSnap =await getDocs(Userq)
  //       const res = UserSnap.docs[0].data()
  //       setRole(res["Role"])

  //     } else {
  //       setState(false)
  //       setEmailVerified(false)
  //     }
  //   });
  // })

  const dataCheck = () => {
    onAuthStateChanged(auth, async (user) => {
      const Users = collection(db,"Users")
      if (user) {
        setUserInfo({"displayName":user.displayName,"photoURL":user.photoURL})
        setState(true)
        setEmailVerified(user.emailVerified)
        const Userq = query(Users,where("Id","==",auth.currentUser.uid));
        const UserSnap =await getDocs(Userq)
        const res = UserSnap.docs[0].data()
        setRole(res["Role"])
      }else{
        setState(false)
        setEmailVerified(false)
      }
    })
  }
  
   useEffect(() => {
    dataCheck()
  },[])

  

  return (
    <div className="App">
      {state ? 
        <div>
            {
              ( userInfo.displayName==null || userInfo.photoURL==null || Role==null ) ?
              <AppUserInfo/>
            :
              <div>
                {emailVerified ? 
                  <AppRoute/>
                  :
                  <AppNotVerifEmailRoute/>
                }
              </div>
            }
        </div>
        :
        <WelcomeRoute/>
      }
  </div>
  );
}

export default App;
