import React, { useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './Screens/ProfileScreen';


function App() {
  const user = useSelector(selectUser); // will give user back
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){

        //Logged In
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      );
    }
     
    else{
        //Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;

  }, [dispatch]);

  return (
    <div className="app" style={{minHeight:"100vh", backgroundColor: "black"}}>
      <Router>
        {!user ? (
          <LoginScreen />
        ):(
        <Routes>
           <Route exact path='/profile' element={<ProfileScreen/>} />

          <Route exact path='/' element={<HomeScreen/>} />
        </Routes>
  )}
      </Router>
        </div>
  );
}

export default App;
