import React from "react";
import styled from "styled-components";
import Select from "react-select";

const SelectBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 12px;
`

const SelectTitle = styled.label`
  width: 30%;
  color: var(--text2);
  font-size: var(--font13);
  font-weight: 400;
`

function PopupSelect({ title }){
    return(
        <>
            <SelectBox>
                <SelectTitle>{title}</SelectTitle>
                <Select />
            </SelectBox>
        </>
    )
}

export default PopupSelect;