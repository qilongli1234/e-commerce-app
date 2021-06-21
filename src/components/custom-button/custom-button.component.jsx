import React from 'react';

import './custom-button.style.scss';


const Button = ({children,isGoogleSignIn, type,onClick})=>(
  
   <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}  type={type} onClick={onClick}>
           
    {children}
    
    
   </button>






);


export default Button;