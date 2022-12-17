import React from 'react'

const TextField = (props) => {
  const {label, errorMessage, onChange, id, ...inputProps} = props;
  return (
    <div className="form-control">
        <label htmlFor="username">{label}</label>
        <input {...inputProps} onChange={onChange}  />
        <small className="error">{errorMessage}</small>
    </div>
  )
}

export default TextField