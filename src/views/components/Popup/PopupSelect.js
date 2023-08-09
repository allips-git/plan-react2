import React from "react";
import styled from "styled-components";
import Select from "react-select";

import DropDowBtn from "../../../assets/images/btn-next.png";

const SelectBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 12px;
`

const SelectTitle = styled.label`
  width: 30%;
  color: var(--text2);
  font-size: var(--font13);
  font-weight: 400;
`

const SelectWrapper = styled.div`
  width: 70%;
`

const DropdownButton = styled.span`
  transform: rotate(90deg);
`

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        width: "100%",
        fontSize: "var(--font13)",
        border: "1px solid var(--line4)",
        borderRadius: "2px",
        backgroundColor: state.isFocused ? "var(--bg3)" : "white",
        "&:hover": {
            border: "1px solid var(--line4)",
        },
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
};

function PopupSelect({ title }) {
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        // ...

    ];

    return (
        <SelectBox>
            <SelectTitle>{title}</SelectTitle>
            <Select
                options={options}
                styles={customStyles}
                placeholder="선택"
                components={{
                    DropdownIndicator: () => (
                        <DropdownButton>
                            <img src={DropDowBtn} alt="dropdown-button" />
                        </DropdownButton>
                    ),
                }}
            />
        </SelectBox>
    );
}

export default PopupSelect;
