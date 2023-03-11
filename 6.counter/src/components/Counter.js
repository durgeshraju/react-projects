import React, {Fragment, useContext} from 'react';
import { CounterContext } from '../Context/CounterContext';
import classes from './Counter.module.css';
import Button from '../UI/Button';

const Counter = ({title}) => {
const {count, handlerIncrement, handlerDcrement, setCount, disabled } = useContext(CounterContext);
  return (
    <Fragment>
        <h1>{title}</h1>
        <span className={classes.value}>
          {count}
        </span>        
        <div className="button-container">
          <Button text="decrease" click={handlerDcrement} disabled={disabled} />
          <Button text="reset" click={()=> setCount(0)} />       
          <Button text="Increment" click={handlerIncrement} />
        </div>
    </Fragment>
  )
}

export default Counter;