import React,{useState} from "react";
import styled from "styled-components";

const StyledLogin = styled.div`
  justify-content: center;

  min-height: 100vh;
  display: flex;
  margin-top: 10%;

  .form {
    background: #d9e2e8;
    width: 400px;
    height: 300px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 2px 10px #9c9c9c;
  }
  label {
    font-family: sans-serif;
    font-size: 16px;
  }
  input {
    margin: 20px;
    width: 150px;
    height: 25px;
  }
  .submitButton {
    background-color: #7497aa;
    border: none;
    border-radius: 5px;
    justify-content: center;
    color: white;
    width: 65px;
    height: 35px;
  }
  a{
      text-decoration:none;
      color:black;
  }
  a:hover{
    text-decoration:underline;
    
}
`;
function Login() {
 
const [form, setForm] = useState("register")
const [infoInput, setInfoInput] = useState();

 const handleInput = e => {
    const { name, value } = e.target ;
    setInfoInput({...value,[name]: value})
    
    console.log(infoInput)
 }
  const handleSubmit = (event) => {
      event.preventDefault()
    console.log(infoInput)
  };

  return (
    <StyledLogin>
        {form === "register" ?
      <form className="form">
        <div className="container">
            <h1>Register</h1>
          <label for="name"> Name: &nbsp; </label>
          <input id="name" name="name"  type="text" onChange={handleInput}/>
          <br />
          <label for="username"> Username: &nbsp; </label>
          <input
            
            id="username"
            name="username"
            
            type="text"
            onChange={handleInput}
          />{" "}
          <br />
          <label for="password"> Password: &nbsp; </label>
          <input
            id="password"
            name="password"
            
            type="password"
            onChange={handleInput}
          />
          <br />
          <button className="submitButton" onClick={handleSubmit}>
            {" "}
            Submit{" "}
            
          </button> &nbsp;
          <a onClick={()=>{setForm("login")}} href="#"> Already a user? Sign in </a>
        </div>
      </form>: <form className="form">
        <div className="container">
            <h1>Login</h1>
         <label for="username"> Username: &nbsp; </label>
          <input
            on
            id="username"
            name="username"
            
            type="text"
            onChange={handleInput}
          />{" "}
          <br />
          <label for="password"> Password: &nbsp; </label>
          <input
            id="password"
            name="password"
            
            type="password"
            onChange={handleInput}
          />
          <br />
          <button className="submitButton" onClick={handleSubmit}>
            {" "}
            Submit{" "}
          </button>
          <a onClick={()=>{setForm("register")}} href="#"> Not a user? Sign Up </a>
          
        </div>
      </form>}
    </StyledLogin>
  );
}

export default Login;
