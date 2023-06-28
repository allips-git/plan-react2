import React from "react";
import Header from "../../common/Header";
import InputLabel from "../../components/InputLabel";
import styled from "styled-components";
import InputRadio from "../../components/InputRadio";

const LoginWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 14px 14px 71px 14px;
`

function LoginInput(){
    return(
        <>
            <Header title="로그인" />
            <LoginWrapper>
                <InputLabel name="email" label="이메일" type="text" placeholder="이메일을 입력해주세요." />
                <InputLabel name="password" label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." />
                <InputRadio name="autologin" label="자동 로그인" />
            </LoginWrapper>
        </>
    )
}

export default LoginInput;