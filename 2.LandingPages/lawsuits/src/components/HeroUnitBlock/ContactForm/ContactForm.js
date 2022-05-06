import React, {Fragment, useState} from 'react';
import classes from './ContactForm.module.css'
import InputField from '../../../sharedUI/InputField';

const ContactForm = props => {  
  const [isDisabled, setDisabled] = useState(false);
  const [focused, setFocused] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",    
    helpFiled: ""
  });    
  const userInput = [
    {
      id: 1,
      name: "username",
      type: "text",
      errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      placeholder: "Username",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Email Address",
      errorMessage: "It should be a valid email address!",
      required: true
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      label: "Phone",
      placeholder: "Phone Number",     
      required: true
    },
    {
      id: 4,
      name: "helpFiled",
      type: "text",
      label: "Please Key in your query",
      placeholder: "How can we help ?",     
      required: true      
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setDisabled(false);
    setTimeout(() => {
      setValues({
        username: '',
        email: '',
        phone: '',
        helpFiled: ''
    });
    },2000, setFocused(false));  
    setTimeout(() => {
       setSubmitting(false);      
       setDisabled(true); 
     },2000);      
  };

   const onChangeHandler = (e) =>{
    setValues({ ...values, [e.target.name]: e.target.value});
    setDisabled(e.target.value.length >= 1);
   }

   const onFocusHandler = (e) =>{
     setFocused(true);
   }

    return(
        <form onSubmit={handleSubmit}>
        <div className= {classes['main-heading-wrapper']}>          
           <h3 className="fw-bold mb-0 pb-3"><span>Email now</span> for free legal advice</h3>   
           <div className= {classes.formElemntsWrapper}>
           {submitting && 'Form submitting'}
            {userInput.map((input)=>{
            return (
            <Fragment key={input.id}>
            <InputField                         
              {...input} 
              value={values[input.name]}
              onChange={onChangeHandler}
              onBlur={onFocusHandler}
              onFocus={() =>
                input.name && setFocused(true)
              }              
              focused={focused.toString()}
              className="form-control"
            /></Fragment>
            )})
          }            
            </div>            
            <button type="submit" className="btn btn-lg btn-primary w-100 mt-1" disabled={!isDisabled}>Start Free Consultation</button>
        </div>
        </form>            
    )
}
export default ContactForm;