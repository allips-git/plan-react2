import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  
  & + &{
    margin-top: 12px;
  }
`

const InputTitle = styled.label`
  width: 50%;
  color: var(--text3);
  font-size: var(--font13);
  font-weight: 500;
  text-align: left;
`

const InputBox = styled.input`
  float: right;
  width: 40%;
  border-radius: 2px;
  border: 1px solid var(--line4);
  margin-left: 10%;
  padding: 8px 25px 8px 10px;
  font-size: var(--font12);
  text-align: right;
`

const InputSub = styled.span`
  position: absolute;
  font-size: var(--font12);
  color: ${props => props.red ? "var(--red2)" : "var(--blue3)"};
  right: 10px;
`

function InlineLabel({ label, name, value, onChange, red }){
    return(
        <>
            <InputWrapper>
                <InputTitle for={name}>{label}</InputTitle>
                <InputBox
                    type="number"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                <InputSub red={red}>원</InputSub>
            </InputWrapper>
        </>
    )
}

export default InlineLabel;