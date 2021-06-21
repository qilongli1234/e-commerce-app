import React from 'react';

import './form-input.styles.scss'




const FormInput=({handleChange,label,name,value,required,type})=>(

  <div className="group">
    
     <input className='form-input'  label={label} name={name} type={type} value={value} onChange={handleChange} required={required}/>
     {
         label?
         (<label className={`${value.length?'shrink':""} form-input-label `}> {label}</label>)
         :null
     }
  </div>



)

export default FormInput;