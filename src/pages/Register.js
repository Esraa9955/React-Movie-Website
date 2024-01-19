import React, { useState } from "react";
//import { Link,useNavigate } from 'react-router-dom';

const Register = () => {
 // const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [registerFormError, setRegisterFormError] = useState({
    name: null,
    email: null,
    userName: null,
    password: null,
    confirmPassword: null,
  });
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  const handleFieldChange = (event) => {
    console.log(event.target.value);
    const field_name = event.target.name;
    const field_value = event.target.value;

    switch (field_name) {
      case "name":
        setRegisterForm({
          ...registerForm,
          name: field_value,
        });
        setRegisterFormError({
          ...registerFormError,
          name: field_value.length === 0 ? "this field is required" : null,
        });
        break;
      case "email":
        setRegisterForm({
          ...registerForm,
          email: field_value,
        });
        setRegisterFormError({
          ...registerFormError,
          email:
            field_value.length === 0
              ? "this field is required"
              : !validateEmail(field_value)
              ? "Invalid emaial format"
              : null,
        });
        break;

      case "userName":
        setRegisterForm({
          ...registerForm,
          userName: field_value,
        });
        setRegisterFormError({
          ...registerFormError,
          userName:
            field_value.length === 0
              ? "this field is required"
              : field_value.includes(" ")
              ? "UserName should not contain spaces"
              : null,
        });
        break;
      case "password":
        setRegisterForm({
          ...registerForm,
          password: field_value,
        });
        setRegisterFormError({
          ...registerFormError,
          password:
            field_value.length === 0
              ? "this field is required"
              : field_value.length < 8
              ? " password length must be more than 8 characters"
              : !validatePassword(field_value)
              ? "Invalid password format"
              : null,
        });
        break;
      case "confirmPassword":
        setRegisterForm({
          ...registerForm,
          confirmPassword: field_value,
        });
        setRegisterFormError({
          ...registerFormError,
          confirmPassword:
            field_value.length === 0 
            ? "this field is required" 
            :field_value !== registerForm.password
            ?"Password do not match"
            : null,
        });
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => 
    e.preventDefault();
    //if (
     // !registerFormError.name===null &&
      //!registerFormError.email===null &&
    //  !registerFormError.userName===null &&
     // !registerFormError.password===null &&
     // !registerFormError.confirmPassword
    //){
    //navigate('/');*
   // }
   // else {
      // If there are validation errors, you can display a message or handle them accordingly
   //console.log('Form validation failed. Please correct the errors.');
    //}
  
  console.log(registerForm);

  return (
    <>
      <h1>Sign Up</h1>
      <hr />

      <form onSubmit={handleSubmit} className="m-5">
        <div className="mb-3">
          <label for="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            value={registerForm.name}
            onChange={handleFieldChange}
            name="name"
          />
          {registerFormError.name && (
            <div id="nameInput" className="form-text text-danger">
              {registerFormError.name}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label for="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            value={registerForm.email}
            onChange={handleFieldChange}
            name="email"
          />
          {registerFormError.email && (
            <div id="emailInput" className="form-text text-danger">
              {registerFormError.email}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label for="userNameInput" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="userNameInput"
            value={registerForm.userName}
            onChange={handleFieldChange}
            name="userName"
          />
          {registerFormError.userName && (
            <div id="userNameInput" className="form-text text-danger">
              {registerFormError.userName}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label for="passwordInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput1"
            value={registerForm.password}
            onChange={handleFieldChange}
            name="password"
          />
          {registerFormError.password && (
            <div id="passwordInput1" className="form-text text-danger">
              {registerFormError.password}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label for="passwordInput2" className="form-label">
            confirm password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput2"
            value={registerForm.confirmPassword}
            onChange={handleFieldChange}
            name="confirmPassword"
          />
          {registerFormError.confirmPassword && (
            <div id="passwordInput2" className="form-text text-danger">
              {registerFormError.confirmPassword}
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
        
      
      </form>
    </>
  );
};

export default Register;
