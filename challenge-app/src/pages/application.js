import React from 'react'
// import API from "../utils/API"



function Application(){






    


    // const registerUser = () => {
    //     API.register({
    //       username: "JoeBlow",
    //       password: "12345678",
    //       name: "Joe Blow",
    //     }).then((data) => {
    //       console.log(data);
    //     });
    //   };
    
    //   const userLogin = () => {
    //     API.login({
    //       username: "JoeBlow",
    //       password: "12345678",
    //     }).then((data) => {
    //       console.log(data);
          
    //     });

    //   };

      return(
          <>
          <form>
             <div className='container'>
                 <label for='motivation'> Motivation</label>
                 <input id="motivation" name="motivation" type="text"/>
                 </div> 
          </form>
        {/* <button onClick={registerUser}> YEAHHH </button>
        <button onClick={userLogin}> WOAHHH</button> */}
        </>
      )
}

export default Application