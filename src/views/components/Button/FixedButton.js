import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  padding: 16px 18px;
  border-radius: 4px;
  background-color: var(--blue3);
  position: fixed;
  right: 16px;
  bottom: 30px;
  border: none;
  color: var(--text5);
  font-weight: 700;
  font-size: var(--font12);
`

function FixedButton({content}){
    return(
        <>
            <ButtonWrapper>
                {content}
            </ButtonWrapper>
        </>
    )
}

export default FixedButton;