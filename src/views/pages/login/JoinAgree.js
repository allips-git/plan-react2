import $ from 'jquery';

import React from "react";
import Header from "../../common/Header";
import styled from "styled-components";
import InputRadio from "../../components/InputRadio";
import ButtonUnder from "../../components/ButtonUnder";
// import {NavLink} from "react-router-dom";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 59px 29px 70px 29px;

  & > div:not(:first-child) {
    margin-top: 10px;
  }
  
  & > label:nth-child(2){
    border-bottom: 1px solid var(--line4);
    padding-bottom: 8px;
  }
  
  label + label{
    margin-top: 8px;
  }
`

const JoinTitle = styled.h2`
  width: 100%;
  font-size: var(--font20);
  color: var(--text1);
  font-weight: 700;
  
  span{
    color: var(--blue3);
    display: block;
  }
  
  p{
    font-size: var(--font10);
    font-weight: 700;
    color: var(--text4);
    margin: 15px 0 25px 0;
  }
`

function JoinAgree() {
    const agreeChk = () => {
        
    }

    const danal = () => {
        const { IMP } = window;

        IMP.init('imp36139043');

        IMP.certification({
            merchant_uid : 'merchant'
        }, function(rsp) {
            console.log(rsp);
        });
    }

    return (
        <>
            <Header title="약관동의"/>
            <Container>
                <JoinTitle>
                    <span>플랜오더</span>
                    약관에 동의해주세요.
                    <p>모든 이용자는 플랜오더의 이용약관 및 개인정보 처리 방침에 동의해야합니다.</p>
                </JoinTitle>

                <InputRadio bold={'true'} label="모두 동의합니다." name="agreeAll" onClick={(e)=>{
                    let stat = $('#agreeAll').prop('checked');

                    // if(!stat)
                    // {
                    //     $('input[type="checkbox"]').prop('checked', true);
                    // }
                    // else
                    // {
                    //     $('input[type="checkbox"]').prop('checked', false);
                    // }
                }}/>
                <InputRadio font11={'true'} label="[필수] 만 14세 이상입니다." name="agreeChk2" />
                <InputRadio font11={'true'} label="[필수] 이용약관 동의" name="agreeChk3" next="true" />
                <InputRadio font11={'true'} label="[필수] 개인정보 수집 - 이용 동의" name="agreeChk4" next="true" />
                <InputRadio font11={'true'} label="[선택] 마케팅 정보 수신 동의" name="agreeChk5" next="true" />
            </Container>
            {/* <NavLink to="/login/joinus"> */}
                <ButtonUnder content="동의하고 계속하기" onClick={agreeChk}/>
            {/* </NavLink> */}
        </>
    )
}

export default JoinAgree;