import React from 'react';
import Card from '../UI/Card';

const Form = ({children, heading, formSubmit}) => {
  return (    
    <Card>      
      <form id="form" className="form" onSubmit={formSubmit}>
       <h2>{heading}</h2>
        {children}                    
      </form>    
      </Card>
  )
}

export default Form