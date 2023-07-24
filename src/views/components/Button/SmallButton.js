import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  padding: 6px 8px;
  border-radius: 2px;
  background-color: var(--blue4);
  color: var(--text5);
  font-size: var(--font12);
  font-weight: 700;
`

function SmallButton({ content, ...rest }){
    return(
        <>
            <ButtonWrapper {...rest}>{content}</ButtonWrapper>
        </>
    )
}

export default SmallButton;