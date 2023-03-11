import React, { useState, createContext } from 'react';

export const CounterContext = createContext();

export const CounterProvider  = ({children}) => {
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

const handlerIncrement = () =>{    
    setCount(count + 1);
    setDisabled(false); // enable the decrement button    
}

const handlerDcrement = () =>{
    setCount(prevCount => prevCount - 1); // use function parameter to get the current count value
    if(count === 1){
        setDisabled(true);
    }
}

return(
     <CounterContext.Provider
      value={{ count, disabled, setCount, handlerIncrement, handlerDcrement }}
    >
      {children}
    </CounterContext.Provider>
)
};