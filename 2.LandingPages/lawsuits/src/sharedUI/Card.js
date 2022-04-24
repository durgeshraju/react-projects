import React from 'react';
import classes from '../sharedUI/Card.module.css'

const Card = (props) =>{
    return(
          <div className={classes.cardWrapper}>            
            {props.children}            
          </div>
    );
};
export default Card;