import React from "react";
import styled, {css} from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
`

const LabelTxt = styled.label`
  color: var(--text3);
  font-size: var(--font10);
  font-weight: 500;
  position: absolute;
  padding: 0 2px;
  background-color: var(--bg3);
  top: -8px;
  left: 6px;
`;

const LabelVital = styled.span`
  color: var(--red2);
  display: none;

  ${props =>
    props.vital &&
    css`
            display: inline;
          `
}
`

const InputBox = styled.input`
  border-radius: 2px;
  border: 1px solid var(--line4);
  background-color: var(--bg3);
  padding: 10px 14px;
  width: calc(100% - 80px);
  height: 40px;
  color: var(--text1);

  &::placeholder {
    color: var(--text4);
  }

  ${props =>
    props.disabled &&
    css`
            background-color: var(--bg2);
          `
}
`;

const ButtonWrapper = styled.button`
  width: 74px;
  height: 40px;
  padding: 10px;
  background-color: var(--blue4);
  border-radius: 2px;
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  color: var(--text5);
  font-size: var(--font14);
  font-weight: 500;
`

function InputButton({name, label, type, placeholder, value, onChange, vital, disabled, button}) {
    // name = id, name, for
    // label = 화면에 표시되는 input box 이름
    // type = input type / placeholder = placeholder
    // value = 값, onChange = 값 변경 핸들러
    // vital = 중요 표시 * / disabled = 입력 불가

    return (
        <InputWrapper>
            <LabelTxt htmlFor={name}>
                {label}
                <LabelVital vital={vital}> *</LabelVital>
            </LabelTxt>
            <InputBox
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            <ButtonWrapper>{button}</ButtonWrapper>
        </InputWrapper>
    )
}

export default InputButton;