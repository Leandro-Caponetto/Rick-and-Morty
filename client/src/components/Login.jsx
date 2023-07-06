import React, { useState } from "react";



import style from "../styles/Login.module.css";

const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

export default function Login({ login }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [inputsErrors, setInputsErrors] = useState({
    email: "",
    password: "",
  });

 

  const validate = (inputs) => {
    const errors = {};
    if (!inputs.email) errors.email = "Email is null";
    if (inputs.email.length < 6) errors.email = "Email contain 6 characters";

    if (!regExEmail.test(inputs.email)) errors.email = "Email Will be Email";
    if (!regexPassword.test(inputs.password)) errors.password = "Password ... ";
    if (inputs.password.length < 6)
      errors.password = "Password must contain 6 characters";
    if (!inputs.password) errors.password = "Password is null";
    return errors;
  };
  
  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
      
    });
    setInputsErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let aux = Object.keys(inputsErrors);
    
    if (aux.length === 0) {
      
      setInputs({
        email: "",
        password: "",
      });
      setInputsErrors({
        email: "",
        password: "",
      });
      login(inputs);

      
    } else {
      return alert("Error");
    }
  };
  return (
  
    (
      <div className={style.login}>
         
        <form onSubmit={handleSubmit}>
          <h1>Rick & Morty</h1>
          <div className={style.flex}>
            <label className={style.color}>Email: </label>
            <input className={style.input}
              type="text"
              key="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            ></input>
            <span>{inputsErrors?.email && inputsErrors.email}</span>
        
            <label className={style.color}>Password: </label>
            <input className={style.input}
              type="password"
              key="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            ></input>
            <span>{inputsErrors?.password && inputsErrors.password}</span>
          </div>
         
          {Object.keys(inputsErrors).length === 0 ? (
            <button type="submit">Ingresar</button>
          ) : null}
        </form>

        <h4 className={style.nombre}>by Leandro Caponetto</h4>
        <p>Soy Henry 2023</p>
      </div>
    )
  );
}