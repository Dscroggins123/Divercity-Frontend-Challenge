import React from 'react'
import styled from  "styled-components";
import {useHistory} from 'react-router-dom'

const StyledButton = styled.button`

background-color:#7497AA;
border:none;
border-radius:5px;
justify-content:center;
color:white;

`



function ApplyBtn(){
    const history = useHistory()
    return( 
        <StyledButton>
        <a onClick={()=>history.push("/application")}>Apply</a>
        </StyledButton>
    )
}

export default ApplyBtn