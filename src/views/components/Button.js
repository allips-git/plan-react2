import React from "react";
import styled, {css} from "styled-components";

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

  ${props =>
          props.fullGray &&
          css`
            width: 100%;
            background-color: var(--button1);
            color: var(--text1);
            padding: 10px 36px;
            font-size: var(--font14);
            font-weight: 700;
          `
  }
  
  ${props =>
          props.fullBlue &&
          css`
            width: 100%;
            background-color: var(--blue4);
            color: var(--text5);
            padding: 10px 36px;
            font-size: var(--font14);
            font-weight: 700;
          `
  }
`

function Button({content, type, ...rest}) {
    return (
        <>
            <ButtonWrapper type={type} {...rest}>{content}</ButtonWrapper>
        </>
    )
}

export default Button;