import React from 'react';
import classes from '../UI/Button.module.css';

const Button = ({
    text, 
    click
}) => {

  return (
    <button className={classes.btn} onClick={click}>
      {text}
    </button>
  )
}

export default Button;