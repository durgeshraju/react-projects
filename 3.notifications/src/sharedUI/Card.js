import React from 'react';

import classes from '../sharedUI/Card.module.css';

const Card = ({children}) => {    
    return(
        <div className={classes.card}>
            {children}
        </div>
    )
}

export default Card;