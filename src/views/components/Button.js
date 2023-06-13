import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  padding: 6px 8px;
  text-align: center;
  font-size: var(--font12);
  font-weight: 700;
  background-color: var(--blue4);
  border-radius: 2px;
  color: var(--text5);
  border: none;
  min-width: 80px;
`

function Button({content}){
    return(
        <>
            <ButtonWrapper>{content}</ButtonWrapper>
        </>
    )
}

export default Button;