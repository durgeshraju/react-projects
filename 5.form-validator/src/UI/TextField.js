import React from 'react'

const TextField = (props) => {
  const {label, onChange, id, ...inputProps} = props;
  return (
    <div className="form-control">
        <label htmlFor="username">{label}</label>
        <input {...inputProps} onChange={onChange}  />
    </div>
  )
}

export default TextField