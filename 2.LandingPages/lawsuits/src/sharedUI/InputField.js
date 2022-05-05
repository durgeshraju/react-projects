import React from 'react';
const InputField = (props) => { 
    const  {
        value, 
        label, 
        name, 
        placeholder, 
        type, 
        onChange, 
        required, 
        className, 
        errorMessage, 
        ...inputProps
    } = props;
    return(                
        <div className="mb-2">                       
        {label && <label htmlFor="input-field">{label}</label>}     
        <input
            {...inputProps}
            type={type}
            value={value}
            name={name}            
            placeholder={placeholder}            
            onChange={onChange}
            required ={required}
            className={className}
        />
        <span>{errorMessage}</span>
        </div>
    )
};

export default InputField;