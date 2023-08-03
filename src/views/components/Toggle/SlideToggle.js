import React, {useState} from "react";
import styled from "styled-components";

const ToggleSwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 5px;
  top: 50%;
  transform: translateY(-50%);
`;

const ToggleSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: var(--blue8);
  }

  &:checked + .slider:before {
    transform: translateX(30px) translateY(-50%);
    background-color: var(--blue2);
  }
  
`;

const ToggleSwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--text4);
  border-radius: 34px;
  transition: background-color 0.2s;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: var(--text3);
    border-radius: 50%;
    transition: transform 0.2s;
  }
`;

function SlideToggle() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        <ToggleSwitchWrapper>
            <ToggleSwitchInput
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
            />
            <ToggleSwitchSlider className="slider"/>
        </ToggleSwitchWrapper>
    );
}

export default SlideToggle;