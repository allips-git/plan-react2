import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { fncAjax, fncAjaxFail, url } from "../../../dev/function.js";

import styled from "styled-components";
import Header from "../../common/Header";
import RoundTag from "../../components/Tag/RoundTag";
import Button from "../../components/Button/Button";
import LineText from "../../components/Text/LineText";
import BreakLine from "../../components/BreakLine";
import CountList from "../../components/CountList";
import ProcessCard from "../../components/Card/ProcessCard";

import { setClientInfo } from "../../../slice/clientInfoSlice.js"

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
    const dispatch = useDispatch();
    const location = useLocation();
    const state    = location.state;

    const clientInfo = useSelector((state) => state.clientInfo);

    const info  = clientInfo.info;
    const list1 = clientInfo.list1;
    const list2 = clientInfo.list2;

    const getClientInfo = () => {
        let params = {
            USER_CD   : 'AA001-UL-01',
            CLIENT_CD : state.CLIENT_CD
        };

        fncAjax(`${url}/client/clientInfo`, "POST", params).done(function (data) {
            dispatch(setClientInfo(data));
        }).fail(fncAjaxFail);
    };

    const [processTitle, setProcessTitle] = useState('');

    useEffect(() => {
        getClientInfo();
    }, []);

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
                    <CusTitle>{clientInfo['info']['CLIENT_NM']}</CusTitle>
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
                        <RoundTag content={info['TEL']} />
                    </CusListItem>

                    <CusListItem>
                        <CusListTitle>주소</CusListTitle>
                        <RoundTag content={info['ADDR']} />
                    </CusListItem>

                    <LineText title="등록일" content={info['REG_DT']} />
                    <LineText title="상세주소" content={info['ADDR_DETAIL']} />
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
