import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
`

const LabelTxt = styled.label`
  color: var(--text3);
  font-size: var(--font10);
  font-weight: 500;
  position: absolute;
  padding: 0 2px;
  background-color: var(--bg3);
  top: -8px;
  left: 6px;
`

const InputBox = styled.input`
  border-radius: 2px;
  border: 1px solid var(--line4);
  background-color: var(--bg3);
  padding: 10px 14px;
  width: 100%;
  height: 40px;
  
  &[placeholder]{
    color: var(--text4);
  }
`

function InputLabel({name, label, type, placeholder}){
    return(
        <>
            <InputWrapper>
                <LabelTxt for={name}>{label}</LabelTxt>
                <InputBox id={name} name={name} type={type} placeholder={placeholder} />
            </InputWrapper>
        </>
    )
}

export default InputLabel;