import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCVDTmi_dDG96Gguehaxbsj7MSmYT-xMsY",
    authDomain: "e-commerence-efdb0.firebaseapp.com",
    projectId: "e-commerence-efdb0",
    storageBucket: "e-commerence-efdb0.appspot.com",
    messagingSenderId: "1054936471430",
    appId: "1:1054936471430:web:22c87a1867c8010e353e07",
    measurementId: "G-V28061FX2M"
  };

  export const createUserProfileDocument= async (userAuth, additionalData)=>{
    
     if(!userAuth) return;

     const userRef= firestore.doc(`users/${userAuth.uid}`);

     const snapShot= await userRef.get();

     if(!snapShot.exists){
       const {displayName, email} = userAuth;
       const createdAt= new Date();

       try{

         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData

         }


         )

       }catch(error){

         console.log('error creating usesr', error.message)

       }

     }


     return userRef;


  }

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore=firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select_account'}) ;
  export const signInWithGoogle=()=> auth.signInWithPopup(provider);

  export default firebase;