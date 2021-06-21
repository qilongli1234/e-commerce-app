
import './App.css';
import React from 'react';
import {Route,Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import Signin from './components/sign-in-sign-up/sign-in-sign-up.component';
import {auth} from './firebase/firebase.utils';


class App extends React.Component{
  
  constructor(props){
    super(props);

    this.state={
      currentUser:null
    };

  }
   
   unsubscribedFromAuth=null;

  

  componentDidMount(){

    this.unsubscribeFromAuth= auth.onAuthStateChanged(user =>{this.setState({currentUser:user})

    console.log(user);
  
  
  });

  }
  

  componentWillUnmount(){

    this.unsubscribedFromAuth();
  }
  
  render(){
  return (
    
    <div>
      <BrowserRouter>
      <Header currentUser={this.state.currentUser} />
     <Switch>

     <Route exact path ='/' component={HomePage} />
     <Route  path ='/shop' component={ShopPage} />
     <Route path='/signin' component={Signin}/>
      
     </Switch>
     </BrowserRouter>
    </div>
    
  )
  }
}

export default App;
