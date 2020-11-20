import React,{useState} from "react";
import styled from "styled-components";
import {useHistory} from 'react-router-dom'

const StyledNav = styled.header`

  nav {
    height: 10vh;
    background-color: #7497AA;
    display: flex;
    align-items:center;
    
  }
  .nav-links {
    list-style: none;
    display: flex;
    font-family:sans-serif;
    align-items:center;
    height:100%;
    width:25%;
    margin-left auto;
    justify-content:space-around;
    }

.nav-links li:hover{
    text-decoration:underline;
}
 .nav-links li a{
    color:white;
    text-decoration:none;
 }
 .logo{
     margin:auto;
     height:100%;
     width:50%;
     align-items:center;
     display: flex;
     font-size:2.5rem;
     color:white;
     font-family:Comic Sans Ms;
     text-decoration:none;
 }
 
 
 
 
`;

function Navbar() {
    const history = useHistory()
    const [login, setLogin] = useState("Register/Login")
    const logout = ()=> {
        
    }
  return (
    <StyledNav>
      <nav>
        <div > <a className="logo" href="/">Jobify</a></div>
        <ul className="nav-links">
          <li>
            <a href="/login" >{login}</a>
          </li>


        </ul>
      </nav>
    </StyledNav>
  );
}

export default Navbar;
