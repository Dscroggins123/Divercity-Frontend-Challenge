import React, { useState, useEffect } from "react";
import styled from "styled-components";
import API from "../utils/API";
import { useHistory } from "react-router-dom";

const StyledApp = styled.div`
  justify-content: center;

  min-height: 100vh;
  display: flex;
  margin-top: 10%;

  .form {
    background: #d9e2e8;
    width: 400px;
    height: 600px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 2px 10px #9c9c9c;
  }
  label {
    font-family: sans-serif;
    font-size: 16px;
  }
  textarea {
    text-align: left;
    margin: 20px;
    width: 350px;
    height: 100px;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0.4em;
    padding-right: 0.4em;
    font-family: Times New Roman;
    font-size: 16px;
    text-indent: 20px;
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
  #cover {
    height: 200px;
    width: 350px;
  }
`;

function Application() {
  const [appInput, setAppInput] = useState();
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setUser(JSON.parse(localStorage.getItem("currentUser")));
    }
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAppInput({ ...appInput, [name]: value });

    console.log(appInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user.token);

    API.application(user.token, {
      motivation: appInput.motivation,
      cover_letter: appInput.cover,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
      history.push("/")
  };

  return (
    <StyledApp>
      <form className="form">
        <h1>Application</h1>
        <br />
        <div className="container">
          <label for="motivation"> Motivation:</label>
          <textarea
            id="motivation"
            name="motivation"
            onChange={handleInput}
          />{" "}
          <br />
          <label for="cover"> Cover Letter:</label>
          <textarea id="cover" name="cover" onChange={handleInput} />
          <br />
          <button className="submitButton" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </StyledApp>
  );
}

export default Application;
