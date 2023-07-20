import React from "react";
import styled from "styled-components";

const CheckWrapper = styled.label`
  display: block;
  
  input:checked + span{
    background-color: var(--blue4);
    color: var(--text5);
  }
`

const CheckInput = styled.input`
  display: none;
`

const CheckTxt = styled.span`
  font-size: var(--font12);
  font-weight: 700;
  color: var(--text0);
  display: block;
  border-radius: 20px;
  border: 1px solid var(--line3);
  background-color: var(--bg3);
  padding: 10px 8px;
`

function InputCheck({label, name}){
    return(
        <>
            <CheckWrapper for={name}>
                <CheckInput id={name} name={name} type="checkbox" />
                <CheckTxt>{label}</CheckTxt>
            </CheckWrapper>
        </>
    )
}

export default InputCheck;