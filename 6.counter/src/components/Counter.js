import React, {Fragment, useState} from 'react';
import classes from './Counter.module.css';
import Button from '../UI/Button';

const Counter = ({title}) => {
const [counter, setCounter] = useState(0);

const handlerIncrement = () =>{    
    setCounter(counter + 1);
}
const handlerDcrement = () =>{
    setCounter(counter - 1);
}

  return (
    <Fragment>
        <h1>{title}</h1>
        <span className={classes.value}  
          style={counter > 0 ? {'color': 'green'} : counter < 0 ? {'color': 'red'} : {}}>
          {counter}
        </span>        
        <div className="button-container">
          <Button text="decrease" click={handlerDcrement} />
          <Button text="reset" click={()=> setCounter(0)} />
          <Button text="Increment" click={handlerIncrement} />
        </div>
    </Fragment>
  )
}

export default Counter;