import React from 'react';

import './checkout.styles.scss';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCartItems ,selectCartTotal} from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
const CheckoutPage= ({total, cartItems}) =>(
   <div className='checkout-page'>
       <div>check out page</div>
       <div className="checkout-header">
      <div className='header-block'>
          <span>Product</span>
      </div>
      <div className='header-block'>
          <span>Description</span>
      </div>
      <div className='header-block'>
          <span>Quanity</span>
      </div>
      <div className='header-block'>
          <span>Price </span>
      </div>
      
      
     
    </div>
    
        {cartItems.map(x=>(<CheckoutItem key = {x.id} cartItem={x}/>))}
    
    <div className='total'>
        <span> TOTAL: ${total}</span>

    </div>
     

    </div>
)

const mapStateToProps = createStructuredSelector(
{ 
    cartItems:selectCartItems,
    total: selectCartTotal
  }

);

export default connect(mapStateToProps)(CheckoutPage);