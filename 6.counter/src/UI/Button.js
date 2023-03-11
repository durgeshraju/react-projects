import React from 'react';
import classes from '../UI/Button.module.css';

const Button = ({
    text, 
    click,
    disabled
}) => {

  return (
    <button className={classes.btn} onClick={click} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button;