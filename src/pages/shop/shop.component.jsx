import React from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/preview-collection/collection-preview.component';

class ShopPage extends React.Component{

     constructor(props){
         super(props);


         this.state={

            collections: SHOP_DATA
         };

     }
  
   
   render(){

     return(
         //let var = this.state.collections;
         
         <div className='shop-page'>


            {this.state.collections.map(x=>( <CollectionPreview key= {x.id} title={x.title} routeName={x.routeName} items={x.items}></CollectionPreview>))
            
           }
           

 

         </div>
         
         
         
         
         
         
         );

   }











}
export default ShopPage;