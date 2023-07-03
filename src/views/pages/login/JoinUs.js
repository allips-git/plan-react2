import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../common/Header";
import InputLabel from "../../components/InputLabel";
import Button from "../../components/Button";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 14px 14px 71px 14px;

  div:not(:first-child) {
    margin-top: 24px;
  }
  
  button{
    margin-top: 24px;
  }
`;

function JoinUs() {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [confirmPw, setConfirmPw] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwError, setPwError] = useState("");
    const [confirmPwError, setConfirmPwError] = useState("");

    // 이메일 유효성 검사
    const validateEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    // 비밀번호 유효성 검사
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
        return passwordRegex.test(password);
    };

    // 비밀번호 확인 유효성 검사
    const validateConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword;
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        if (!validateEmail(value)) {
            setEmailError("이메일 형식이 올바르지 않습니다.");
        } else {
            setEmailError("");
        }
    };

    const handlePwChange = (event) => {
        const value = event.target.value;
        setPw(value);
        if (!validatePassword(value)) {
            setPwError("비밀번호는 8자 이상의 숫자와 영문자 조합이어야 합니다.");
        } else {
            setPwError("");
        }
    };

    const handleConfirmPwChange = (event) => {
        const value = event.target.value;
        setConfirmPw(value);
        const isMatch = validateConfirmPassword(pw, value);
        if (!isMatch) {
            setConfirmPwError("비밀번호가 일치하지 않습니다.");
        } else {
            setConfirmPwError("");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Header title="회원가입 1/3" />
            <Container>
                <form onSubmit={handleSubmit}>
                    <InputLabel
                        label="이메일"
                        name="email"
                        type="text"
                        placeholder="이메일을 입력해주세요."
                        value={email}
                        error={emailError}
                        onChange={handleEmailChange}
                    />
                    <InputLabel
                        label="비밀번호"
                        name="pw"
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        value={pw}
                        error={pwError}
                        onChange={handlePwChange}
                    />
                    <InputLabel
                        label="비밀번호 확인"
                        name="confirmPw"
                        type="password"
                        placeholder="비밀번호를 한 번 더 입력해주세요."
                        value={confirmPw}
                        error={confirmPwError}
                        onChange={handleConfirmPwChange}
                    />
                    <Button type="submit" content="회원가입" fullBlue/>
                </form>
            </Container>
        </>
    );
}

export default JoinUs;
