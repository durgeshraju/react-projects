import React, {useState} from 'react';
import Form  from './components/Form';
import TextField from './UI/TextField';
import Button from './UI/Button';
import inputFiledData from './components/data.json';

const App = () => {
  const [values, setValues] = useState([
  {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  }]);  
  const onSubmitHandler = (event) => {
    event.preventDefault();
  }
  
  const onChangeHandler = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  } 

  return (    
    <div className="container">
      <Form  heading="Register With Us" formSubmit={onSubmitHandler}>      
        {inputFiledData.map((input) =>{
          return(          
            <TextField key={input.id} {...input} value={values[input.name]} onChange={onChangeHandler}/>
          )
        })}         
        <Button text="Submit" bgColor="#3498db" textColor="#ffffff" brdColor="#3498db" btnType="submit" />
      </Form>
    </div>
  );
}

export default App;
