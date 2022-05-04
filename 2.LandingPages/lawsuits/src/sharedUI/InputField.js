import React from 'react';
const InputField = ({ value, label, name, placeholder, type, onChange, required}) => { 
        
    return(                
        <div className="mb-2">                       
        {label && <label htmlFor="input-field">{label}</label>}     
        <input
            type={type}
            value={value}
            name={name}            
            placeholder={placeholder}            
            onChange={onChange}
            required ={required}
            className="form-control"
        />
        </div>
    )
};

export default InputField;