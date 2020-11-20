import React, { useState, useEffect } from "react";
import API from "../utils/API";
import jumboPhoto from "../images/hands.png";
import styled from "styled-components";
import Applybtn from "../components/ApplyBtn"
import ApplyBtn from "../components/ApplyBtn";

const StyledHome = styled.section`
  width: 90%;
  max-width:1380px;
 margin: auto;
 font-family:sans-serif;
 color:#1D2834;
 @media screen and (max-width: 2580px) {
    
    .container{
        
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
    }
 @media screen and (max-width: 980px) {
    
    .container{
        
        display:grid;
        grid-template-columns:1fr 1fr;
    };
    };
    @media screen and (max-width: 640px) {
        
        .container {
    
            display:grid;
             width:80%;
             justify-content:center;
             margin:auto;
             
             grid-template-columns:1fr;  
            
             
           };
        };
   
    
      
    
  
  

  .jumbotron {
    background-image: url(${jumboPhoto});
    background-repeat: no-repeat;
    background-size: 100% 100%;

    width: 100%;
    height: 60vh;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .jobListings {
    text-align: center;
    padding: 40px;
    width:100%
  }
  .inputField {
    margin: auto;
    height: 30px;
    width: 200px;
  }
  #search {
    padding: 20px;
    
    display: block;
    height: 100px;
  }
  h3 {
    font-size: 20px;
    font-family:sans-serif;
  }
  #selectbox {
    height: 30px;
  }
  button {
    height: 30px;
    width: 60px;
  }
.container {
    font-family:sans-serif;
    
   display:grid;
    width:80%;
    justify-content:center;
    margin:auto;
    
   
    
  }
  .jobPosts{
      background-color:#D9E2E8;
      height:300px;
      width:250px;
      margin:10px;
      padding:20px;
      border-radius:5%;
      box-shadow:0px 2px 10px #9c9c9c;
      
  }
  .card{
     font-weight:300;
     
    
    height:450px
      
  }
  .description{
      height:127px;
      overflow:scroll;
  }
  
  
`;

function Home() {
  const [listings, setListings] = useState();
  const [user, setUser] = useState();
  const [option, setOption] = useState('location');

  useEffect(() => {
    API.getAllListings()
      .then((res) => {
        setListings(res.data.jobs);
      })
      .catch((err) => console.log(err));
  }, []);

  const optionChange = (e) => {
      setOption(e.target.value)
      const{name,value} = e.target
     
  }
  
 

  console.log(listings);
  
  return (
    <StyledHome>
      <div className="jumbotron">
        {/* <button> Register</button>
                <button>Login</button> */}
      </div>
      <div className="jobListings">
        <h1> Search for Jobs</h1>
        <div id="search">
          <h3>
            Search by &nbsp;
            <select id="selectbox" name="options" onChange={optionChange}>
              <option value="location">Location</option>
              <option value="type">Job Type</option>
              <option value="skill">Skill Tag</option>
            </select>{" "}
            
            <input type="checkbox" className="inputField"></input>{" "}
            <button> Search</button>
          </h3>
        </div>
      </div>
      <div className="container">
        {listings ? (
          listings.map((listing) => {
            return (
              <section className="jobPosts">
                <div className="card-container">
                  <h1 className="jobTitle">{listing.title}</h1>
                  <div className="card-wrapper">
                    <div className="card">
                      <p>{listing.company.toUpperCase()} </p>
                      <p>{listing.location}</p>
                      <br />
                      <p className='description'>{listing.description}</p>
                      <br />
                      <ApplyBtn/>
                    </div>
                  </div>
                </div>
              </section>
            );
          })
        ) : (
          <h1> Loading...</h1>
        )}
      </div>

      
    </StyledHome>
  );
}

export default Home;
