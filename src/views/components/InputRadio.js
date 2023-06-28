import React from "react";
import styled from "styled-components";

const InputBox = styled.label`
  width: fit-content;
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  
  & > span{
    display: block;
    width: 23px;
    height: 23px;
    border-radius: 2rem;
    box-shadow: 0 0 0 1px var(--line4) inset;
    margin-right: 11px;
  }
  
  & > p{
    color: var(--text2);
    font-size: var(--font14);
    font-weight: 500;
  }
`

const InputWrapper = styled.input`
  display: none;
  
  &:checked + span{
    box-shadow: 0 0 0 6px var(--blue4) inset;
  }
`

function InputRadio({label, name}){
    return(
        <>
            <InputBox for={name}>
                <InputWrapper type="checkbox" id={name} name={name} />
                <span></span>
                <p>{label}</p>
            </InputBox>
        </>
    )
}

export default InputRadio;