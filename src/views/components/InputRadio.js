import React from "react";
import styled, {css} from "styled-components";

import BtnNext from "../../assets/images/btn-next.png"

const InputBox = styled.label`
  width: 100%;
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;

  & > span {
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 2rem;
    box-shadow: 0 0 0 1px var(--line4) inset;
    margin-right: 11px;
  }
`

const InputTxt = styled.p`
  color: var(--text2);
  font-size: var(--font14);
  font-weight: 500;

  ${props =>
          props.font11 &&
          css`
            font-size: var(--font11);
          `
  }

  ${props =>
          props.bold &&
          css`
            font-weight: bold;
            color: var(--text0);
          `
  }
`

const NextBtn = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  cursor: pointer;
  display: none;

  ${props =>
          props.next &&
          css`
            display: block;
          `
  }
`

const InputWrapper = styled.input`
  display: none;

  &:checked + span {
    box-shadow: 0 0 0 6px var(--blue4) inset;
  }
`

function InputRadio({label, name, next, ...rest}) {
    return (
        <>
            <InputBox for={name}>
                <InputWrapper type="checkbox" id={name} name={name}/>
                <span></span>
                <InputTxt {...rest}>{label}</InputTxt>
                <NextBtn src={BtnNext} next={next} alt="다음" title="다음"/>
            </InputBox>
        </>
    )
}

export default InputRadio;