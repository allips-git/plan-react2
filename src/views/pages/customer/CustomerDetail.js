import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { fncAjax, fncAjaxFail, url } from "../../../dev/function.js";

import styled from "styled-components";
import Header from "../../common/Header";
import RoundTag from "../../components/RoundTag";
import Button from "../../components/Button/Button";
import LineText from "../../components/Text/LineText";
import BreakLine from "../../components/BreakLine";
import CountList from "../../components/CountList";
import ProcessCard from "../../components/Card/ProcessCard";

const Container = styled.div`
  background-color: var(--bg3);
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 14px 14px 71px 14px;
`;

const CusTitleWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const CusTitle = styled.div`
  font-size: var(--font16);
  font-weight: 700;
  color: var(--text1);
`;

const CusListWrapper = styled.div`
  width: 100%;
`;

const CusListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

const CusListTitle = styled.p`
  color: var(--text2);
  font-size: var(--font12);
  font-weight: 400;
  min-width: 50px;
  margin-right: 18px;
`;

const CustomerBox = styled.div`
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--line4);
`;

const ProcessBox = styled.div`
  width: 100%;

  div + div {
    margin-top: 20px;
  }
`;

// data
const CustomerCount = [
    { txt: "판매중", count: "1" },
    { txt: "판매완료", count: "0" },
    { txt: "취소", count: "1" },
];

const ProcessData = [
    { txt: "계약 완료" },
    { txt: "발주 완료" },
    { txt: "시공 완료" },
    { txt: "결제 완료" },
];

const DEFAULT_PAY = 1000000;

function CustomerDetail({ type }) {
    const location = useLocation();
    const state    = location.state;

    let params = {
        USER_CD   : 'AA001-UL-01',
        CLIENT_CD : state.CLIENT_CD
    };

    fncAjax(`${url}/client/clientInfo`, "POST", params).done(function (data) {
        console.log(data);
    }).fail(fncAjaxFail);

    const [processTitle, setProcessTitle] = useState('');

    useEffect(() => {
        switch (type) {
            case 'processOne':
                setProcessTitle('견적대기');
                break;
            case 'processTwo':
                setProcessTitle('견적중');
                break;
            default:
                setProcessTitle('');
        }
    }, [type]);

    return (
        <>
            <Header title="고객 상세" />
            <Container>
                <CusTitleWrapper>
                    <CusTitle>한샘 인테리어</CusTitle>
                    <Button
                        type="button"
                        content="정보수정"
                        style={{
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            right: "0",
                        }}
                        white
                    />
                </CusTitleWrapper>

                <CusListWrapper>
                    <CusListItem>
                        <CusListTitle>전화번호</CusListTitle>
                        <RoundTag content="테스트" />
                    </CusListItem>

                    <CusListItem>
                        <CusListTitle>주소</CusListTitle>
                        <RoundTag content="부산광역시 수영구 수영로 411-1" />
                    </CusListItem>

                    <LineText title="등록일" content="22.02.09" />
                    <LineText title="상세주소" content="디자인윈도우 1층" />
                    <LineText title="담당자" content="홍길동" />
                    <LineText title="그룹명" content="일반고객" />
                </CusListWrapper>

                <BreakLine />

                <ProcessBox>
                    <CustomerBox>
                        <CountList items={CustomerCount} />
                    </CustomerBox>

                    <ProcessCard title={processTitle} pay={DEFAULT_PAY} items={ProcessData} />
                </ProcessBox>
            </Container>
        </>
    );
}

export default CustomerDetail;
