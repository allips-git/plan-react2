import React from "react";
import styled from "styled-components";
import Select from "react-select";

const MultiBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 12px;
`

const MultiTitle = styled.label`
  width: 30%;
  color: var(--text2);
  font-size: var(--font13);
  font-weight: 400;
`

const MultiWrapper = styled.div`
  width: 70%;
  display: flex;
`

const MultiInput = styled.input`
  width: 48%;
  padding: 10px 14px;
  border-radius: 2px;
  border: 1px solid var(--line4);
  font-size: var(--font13);
  font-weight: 400;
  color: var(--text1);
  background-color: ${props => props.disabled ? "var(--line5)" : "var(--bg3)"};
`

function PopupMulti({ title, name, placeholder }){
    return(
        <>
            <MultiBox>
                <MultiTitle>{title}</MultiTitle>
                <MultiWrapper>
                    <Select />
                    <MultiInput type="text" id={name} name={name} placeholder={placeholder} />
                </MultiWrapper>
            </MultiBox>
        </>
    )
}

export default PopupMulti;