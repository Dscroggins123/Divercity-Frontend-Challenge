import React,{useState} from 'react'
import styled from  "styled-components";
import {useHistory} from 'react-router-dom'

const StyledButton = styled.button`

background-color:#7497AA;
border:none;
border-radius:5px;

color:white;

`



function ApplyBtn({user}){
    const history = useHistory()
    
    const apply = () => {
        if (user === undefined){return}
        else{history.push("/application")
        }
    }
    
    return( 
        <StyledButton>
        <a onClick={apply}>Apply</a> 
        </StyledButton>
    )
}

export default ApplyBtn