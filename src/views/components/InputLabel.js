import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
`;

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

const InputBox = styled.input`
  border-radius: 2px;
  border: 1px solid ${props => {
    if (props.error) {
      return "var(--red2)";
    } else if (props.value === "") {
      return "var(--line4)";
    } else {
      return "var(--blue4)";
    }
  }};
  background-color: var(--bg3);
  padding: 10px 14px;
  width: 100%;
  height: 40px;

  &[placeholder] {
    color: var(--text4);
  }
`;

const ErrorText = styled.p`
  color: var(--red2);
  font-size: var(--font10);
  margin-top: 10px;
  font-weight: 400;
`;

function InputLabel({ name, label, type, placeholder, value, error, onChange }) {
    return (
        <InputWrapper>
            <LabelTxt htmlFor={name}>{label}</LabelTxt>
            <InputBox
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                error={error}
                onChange={onChange}
            />
            {error && <ErrorText>{error}</ErrorText>}
        </InputWrapper>
    );
}

export default InputLabel;
