import React, {useState} from "react";
import styled from "styled-components";
import Select from "react-select";

import Header from "../../common/Header";
import InputLabel from "../../components/Input/InputLabel";
import ButtonUnder from "../../components/Button/ButtonUnder";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 14px 14px 71px 14px;

  div + div {
    margin-top: 20px;
  }
`

function useInputChange(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return [value, handleChange];
}

function CustomerUpload(){
    const [customerValue, handleCustomerChange] = useInputChange("");
    const [numberValue, handleNumberChange] = useInputChange("")

    return(
        <>
            <Header title="고객등록" />
            <Container>
                <InputLabel
                    name="date"
                    label="일자"
                    type="text"
                    value=""
                    onChange=""
                />
                <InputLabel
                    name="date"
                    label="고객명"
                    type="text"
                    value={customerValue}
                    onChange={handleCustomerChange}
                />
                <InputLabel
                    name="date"
                    label="전화번호"
                    type="text"
                    value={numberValue}
                    onChange={handleNumberChange}
                    />
                <InputLabel
                    name="date"
                    label="주소"
                    type="text"
                    value=""
                    onChange=""
                />
                <InputLabel
                    name="date"
                    label="상세주소"
                    type="text"
                    value=""
                    onChange=""
                />
                <Select options="" />
                <Select options="" />
            </Container>
            <ButtonUnder content="명세서 이동" onClick="" />
        </>
    )
}

export default CustomerUpload;