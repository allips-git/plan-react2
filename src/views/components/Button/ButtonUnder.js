import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 8px 16px 14px 16px;
  background-color: var(--bg3);
  box-shadow: 0 0 3px 0 rgba(0,0,0,.16);
  width: 100%;
`

const ButtonContent = styled.button`
  width: 100%;
  padding: 12px 36px;
  background-color: var(--blue4);
  color: var(--text5);
  font-weight: 700;
  font-size: var(--font13);
  text-align: center;
  border: 0;
  border-radius: 2px;
`

function ButtonUnder({content, onClick}){
    return(
        <>
            <ButtonWrapper>
                <ButtonContent onClick={onClick}>{content}</ButtonContent>
            </ButtonWrapper>
        </>
    )
}

export default ButtonUnder;