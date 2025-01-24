
import { initializeApp } from "firebase/app";


import {
        getAuth,
    
 } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDw_e_Ml6wJ-QLrAp4L-bKYThx72dkfJIM",
  authDomain: "react-authentication-fc8c7.firebaseapp.com",
  projectId: "react-authentication-fc8c7",
  storageBucket: "react-authentication-fc8c7.appspot.com",
  messagingSenderId: "898950532477",
  appId: "1:898950532477:web:bfbd4b5c00a255284ad014",
  measurementId: "G-DJKFWTN06S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export{
    app,
    auth
}