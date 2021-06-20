import React from 'react';
import './directory.component.scss'
import MenuItem from '../menu-item/menu-item.component';
class Directory extends React.Component{

  constructor(){
    
     super();



     this.state ={

       sections: [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              size:'',
              id: 1,
              
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              size:'',
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              size:'',
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ]
     }



  }
  //{this.state.sections.map((x)=>(<MenuItem key={x.id} title={x.title} size={x.size} linkUrl={x.linkUrl} imageUrl={x.imageUrl}/>)) }
  //{this.state.sections.map((id,...otherprop)=>(<MenuItem key={id} {...otherprop}/>)) }
  render(){
    return(
     <div className="directory-menu">
      
      
      {this.state.sections.map((x)=>(<MenuItem key={x.id} title={x.title} size={x.size} linkUrl={x.linkUrl} imageUrl={x.imageUrl}/>)) }

     </div>
    )



  }




}

export default Directory;