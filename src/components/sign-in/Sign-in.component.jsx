import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

import Button from '../custom-button/custom-button.component';

import{ signInWithGoogle} from '../../firebase/firebase.utils';

class Signin extends React.Component{


    constructor(props){

       super(props);

       this.state={

        email:"" ,
        password:""




       };




    }

   

 handleSubmit = event=>{

    event.preventDefault();

    this.setState({email:"",password:""});






 }

  handleChange =event=>{

    const {value,name} = event.target;

    this.setState({[name]:value})



  }

  hello=()=>(
   
     console.log("hi")

  )


render(){
   

   return(
  
       
    <div className='Sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

    
    <form onSubmit={this.handleSubmit}>
       
       <FormInput name="email" type='email' value={this.state.email}  handleChange= {this.handleChange} label="Email" required/>

       
       
       <FormInput name="password" type='password' value={this.state.password}  handleChange= {this.handleChange} label="Password" required/>
       
       <div className="buttons">
       <Button type="submit" >Sign in </Button>
       <Button onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign in with google{' '}</Button>
       </div>
    </form>
    </div>

   )







   }
    








}


export default Signin;