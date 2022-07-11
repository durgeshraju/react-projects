import React from 'react';
import classes from '../sharedUI/Button.module.css';
const Button = (props) => {
const {
    text,
    color,
    variant,
    border,
    href,
    icon,
    cssClass        
} = props;
const ButtonElement = href ? 'a' : 'button';
 return (
    <ButtonElement  className={`${classes.btnDefault} ${classes[cssClass]}`}            
        style={{color, border, backgroundColor: variant}} 
        href={props.href}        
        >        
        <span>{icon} {text}</span>
        {props.children}
    </ButtonElement>
    )
}
export default Button;