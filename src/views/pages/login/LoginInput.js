import React from "react";
import styled from "styled-components";

import Header from "../../common/Header";
import InputLabel from "../../components/InputLabel";
import InputRadio from "../../components/InputRadio";
import {NavLink} from "react-router-dom";
import Button from "../../components/Button";

const LoginWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 14px 14px 71px 14px;

  div + div {
    margin-top: 20px;
  }
  
  div + button{
    margin-top: 20px;
  }
  
  button + div{
    margin-top: 20px;
  }
`

const LoginLink = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  label {
    width: 45%;
  }

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`

const LoginSearch = styled.div`
  float: right;
  text-align: right;
  width: 55%;
  font-size: var(--font12);
  color: var(--text2);

  a {
    display: inline-block;
    color: var(--text2);
    height: var(--font12);
    line-height: var(--font12);

    &:first-child {
      border-right: 1px solid var(--text2);
      padding-right: 5px;
    }

    &:last-child {
      padding-left: 5px;
    }
  }
`

const LoginJoin = styled.div`
  text-align: center;
  color: var(--text2);
  font-size: var(--font14);
  
  a{
    color: var(--blue4);
    font-weight: 700;
    margin-left: 18px;
  }
`

function LoginInput() {
    return (
        <>
            <Header title="로그인"/>
            <LoginWrapper>
                <InputLabel name="email" label="이메일" type="text" placeholder="이메일을 입력해주세요."/>
                <InputLabel name="password" label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요."/>
                <LoginLink>
                    <InputRadio name="autologin" label="자동 로그인"/>
                    <LoginSearch>
                        <NavLink>아이디 찾기</NavLink>
                        <NavLink>비밀번호 찾기</NavLink>
                    </LoginSearch>
                </LoginLink>
                <Button type="submit" content="이메일 로그인" fullGray/>
                <LoginJoin>
                    계정이 없으신가요?
                    <NavLink to="/login/agree">회원가입</NavLink>
                </LoginJoin>
            </LoginWrapper>
        </>
    )
}

export default LoginInput;