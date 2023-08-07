import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 12px;
`

const InputTitle = styled.label`
  width: 30%;
  color: var(--text2);
  font-size: var(--font13);
  font-weight: 400;
`

const InputBox = styled.input`
  width: 70%;
  padding: 10px 14px;
  border-radius: 2px;
  border: 1px solid var(--line4);
  font-size: var(--font13);
  font-weight: 400;
  color: var(--text1);
  background-color: ${props => props.disabled ? "var(--line5)" : "var(--bg3)"};
`


function PopupInput({ name, title, placeholder, disabled }){
    return(
        <>
            <InputWrapper>
                <InputTitle for={name}>
                    {title}
                </InputTitle>
                <InputBox
                    type="text"
                    id={name}
                    name={name}
                    disabled={disabled}
                    placeholder={placeholder}
                />
            </InputWrapper>
        </>
    )
}

export default PopupInput;