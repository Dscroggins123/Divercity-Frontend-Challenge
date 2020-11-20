import React, { useState } from "react";
import styled from "styled-components";
import API from "../utils/API";
import { useHistory } from "react-router-dom";

const StyledLogin = styled.div`
  justify-content: center;

  min-height: 100vh;
  display: flex;
  margin-top: 10%;

  .form {
    background: #d9e2e8;
    width: 400px;
    height: 350px;
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
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
  .missing {
    color: red;
  }
`;
function Login(props) {
  const [form, setForm] = useState("register");
  const [infoInput, setInfoInput] = useState();
  const [show, setShow] = useState(false);

  const history = useHistory();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInfoInput({ ...infoInput, [name]: value });

    console.log(infoInput);
  };

  const registerUser = () => {
    API.register({
      username: infoInput.username,
      password: infoInput.password,
      name: infoInput.name,
    }).then((data) => {
      console.log(data.config);
      props.handleSetCurrentUser({
        token: data.config.xsrfHeaderName,
        username: infoInput.username,
        password: infoInput.password,
      });
      history.push("/");
    });
  };

  const userLogin = () => {
    API.login({
      username: infoInput.username,
      password: infoInput.password,
    }).then((data) => {
      console.log(data);
      console.log(data.data.token);
      props.handleSetCurrentUser({
        token: data.data.token,
        username: infoInput.username,
        password: infoInput.password,
      });
      history.push("/");
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form === "register" &&
      infoInput.username !== undefined &&
      infoInput.password !== undefined &&
      infoInput.name !== undefined
    ) {
      registerUser();
    } else if (
      infoInput.username !== undefined &&
      infoInput.password !== undefined
    ) {
      userLogin();
    } else {
      setShow(true);
    }
  };

  return (
    <StyledLogin>
      {form === "register" ? (
        <form className="form">
          <div className="container">
            <h1>Register</h1>
            <label for="name"> Name: &nbsp; </label>
            <input id="name" name="name" type="text" onChange={handleInput} />
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
            </button>{" "}
            &nbsp;
            <a
              onClick={() => {
                setForm("login");
              }}
              href="#"
            >
              {" "}
              Already a user? Sign in{" "}
            </a>
            <br />
            {show ? <p className="missing">Fields are misssing</p> : ""}
          </div>
        </form>
      ) : (
        <form className="form">
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
            <button
              className="submitButton"
              type="submit"
              onClick={handleSubmit}
            >
              {" "}
              Submit{" "}
            </button>
            <a
              onClick={() => {
                setForm("register");
              }}
              href="#"
            >
              {" "}
              Not a user? Sign Up{" "}
            </a>
            <br />
            {show ? <p className="missing">Fields are misssing</p> : ""}
          </div>
        </form>
      )}
    </StyledLogin>
  );
}

export default Login;
