import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import './header.styles.scss';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
const Header = ({ currentUser,hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
    <img src={"https://i.ibb.co/rMDDYht/QILONG-SHOP.jpg"} alt="QILONG SHOP" />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>

        
     


      )}
      <CartIcon/>
    </div>
     { hidden?null:
    <CartDropDown/>
     }
  </div>
);

const mapStateToProps = createStructuredSelector({

  currentUser:selectCurrentUser,
  hidden : selectCartHidden

}

);

export default connect(mapStateToProps)(Header);
 