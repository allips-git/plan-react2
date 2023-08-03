import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 8px 16px 14px 16px;
  background-color: var(--bg3);
  box-shadow: 0 0 3px 0 rgba(0,0,0,.16);
  width: 100%;
`

const ButtonContent = styled.button`
  width: 49%;
  padding: 12px 36px;
  background-color: ${(props) => props.primary ? "var(--blue4)" : "var(--button1)"};
  color: ${(props) => props.primary ? "var(--text5)" : "var(--text0)"};
  font-weight: 700;
  font-size: var(--font13);
  text-align: center;
  border: 0;
  border-radius: 2px;
  
  & + &{
    margin-left: 2%;
  }
`

function ButtonMulUnder({content1, content2, onClick1, onClick2}){
    return(
        <>
            <ButtonWrapper>
                <ButtonContent onClick={onClick1}>{content1}</ButtonContent>
                <ButtonContent onClick={onClick2} primary>{content2}</ButtonContent>
            </ButtonWrapper>
        </>
    )
}

export default ButtonMulUnder;