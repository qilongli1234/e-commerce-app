
import React from 'react';

import{withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem =({title, imageUrl,size,linkUrl,match,history,id}) =>(

  

    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)} >

         {console.log(match.url)}

          
          
           <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}>
           </div>

           
    
            <div className='content'>
                <div> {id}</div>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>      

            

        </div>





 




);
export default withRouter(MenuItem);