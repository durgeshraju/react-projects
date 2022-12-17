import React from 'react';
import PropTypes from 'prop-types';
import classes from '../UI/Button.module.css'

const Button = ({
    text, 
    disabled, 
    bgColor, 
    textColor, 
    brdColor, 
    btnType
}) => {

const btnInlinestyles = {
    backgroundColor: bgColor, 
    color: textColor, 
    border: `2px solid ${brdColor}`
}
  return (
    <button className={classes.formButton} 
    type={btnType}
    disabled={disabled}
    style={btnInlinestyles}
    >
    {text}
    </button>
  )
}

export default Button;

Button.defaultProps = {
    text: 'Register'
}

Button.propTypes = {
    text: PropTypes.string    
}