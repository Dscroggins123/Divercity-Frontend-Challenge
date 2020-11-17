import React,{useState, useEffect} from "react"
import API from "../utils/API"

function Home() {

    const [listings, setListings] = useState()
    const [user, setUser] = useState()
   
    useEffect(() => {
      API.getAllListings().then(res => {setListings(res.data.jobs) })
     .catch(err => console.log(err));
      
    }, [])

    const registerUser = () => {
        API.register({
            username:"JoeBlow",
            password:"12345678",
            name:"Joe Blow"
        }).then(data => {
            console.log(data)
        })
    }

    const userLogin = () => {
        API.login({
            username:"JoeBlow",
            password:"12345678"
        }).then(data => {
            console.log(data)
        })
    }

    console.log(listings)
   
    return(
        <div>
    {listings? listings.map((listing)=> {return <h1>{listing.title}</h1>}): <h1> Loading...</h1> }
        <button onClick={registerUser}> YEAHHH </button>
        <button onClick={userLogin}> WOAHHH</button>
    </div>
    )



}


export default Home;