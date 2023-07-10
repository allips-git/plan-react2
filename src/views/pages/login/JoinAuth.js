import React, {useState} from "react";
import styled from "styled-components";

import Header from "../../common/Header";
import ImageThumbnail from "../../components/ImageThumbnail";
import InputLabel from "../../components/InputLabel";
import InputRadio from "../../components/InputRadio";
import ButtonUnder from "../../components/ButtonUnder";
import InputButton from "../../components/InputButton";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 14px 14px 71px 14px;

  div + div {
    margin-top: 20px;
  }
`


const AuthTitle = styled.h3`
  font-size: var(--font14);
  font-weight: 700;
`

const AuthTextWrapper = styled.div`
  margin-bottom: 30px;
`

const AuthDescription = styled.p`
  color: var(--text3);
  font-size: var(--font11);
`

function useInputChange(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return [value, handleChange];
}

function JoinAuth() {
    const [rgNumberValue, handleRgNumberChange] = useInputChange("");
    const [taxEmailValue, handleTaxEmailChange] = useInputChange("")

    return (
        <>
            <Header title="사업자 인증 3/3"/>
            <Container>
                <AuthTitle>사업자 인증</AuthTitle>
                <AuthTextWrapper>
                    <AuthDescription>사업자등록증 정보를 인증해 보세요.</AuthDescription>
                    <AuthDescription>인증 시 "사업자 인증 마크와"</AuthDescription>
                    <AuthDescription>매입 공장들과 자동으로 사업자등록증이 공유됩니다.</AuthDescription>
                </AuthTextWrapper>

                <ImageThumbnail
                    title="사업자등록증 사진"
                    name="uploadProfile"
                />

                <InputRadio
                    label="사업자 등록번호 없음"
                    name=""
                />

                <InputButton
                    label="사업자 등록번호 조회"
                    type="text"
                    value={rgNumberValue}
                    name=""
                    vital
                    onChange={handleRgNumberChange}
                    placeholder="사업자 등록번호를 입력하세요" button="검증"
                />

                <InputLabel
                    name=""
                    label="사업자명"
                    type="text"
                    value=""
                    onChange=""
                    disabled
                />

                <InputLabel
                    name=""
                    label="대표자"
                    type="text"
                    value=""
                    onChange=""
                    disabled
                />

                <InputLabel
                    name=""
                    label="도.소매"
                    type="text"
                    value=""
                    onChange=""
                    disabled
                />

                <InputLabel
                    name=""
                    label="제조"
                    type="text"
                    value=""
                    onChange=""
                    disabled
                />

                <InputLabel
                    name=""
                    label="세금계산서 이메일"
                    type="text"
                    value={taxEmailValue}
                    onChange={handleTaxEmailChange}
                    vital
                />
            </Container>
            <ButtonUnder content="저장"/>
        </>
    )
}

export default JoinAuth;