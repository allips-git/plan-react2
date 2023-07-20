import React from "react";
import styled from "styled-components";

import Button from "./Button/Button";

import {ReactComponent as Next} from "../../assets/images/btn-next.svg";

const PlanTalkWrapper = styled.div`
  width: 100%;
  padding: 14px 0;
`

const PlanTalkBox = styled.div`
  width: 100%;
  position: relative;
`

const PlanTalkTitleWrapper = styled.div`
  width: 100%;
`

const PlanTalkTitle = styled.h2`
  color: var(--text0);
  font-size: var(--font12);
  font-weight: 700;
`

const PlanTalkON = styled.span`
  color: ${props => props.active ? "var(--blue4)" : "var(--text3)"};
  margin-left: 3px;
`

const PlanCount = styled.p`
  color: var(--text4);
  font-size: var(--font10);
  font-weight: 500;
`

const PlanOnWrapper = styled.div`
  display: ${props => props.active ? "flex" : "none"};
  margin-top: 14px;
`

const PlanOnBox = styled.button`
  width: 48.5%;
  padding: 14px;
  border-radius: 4px;
  background-color: var(--bg1);
  border: none;
  text-align: left;

  &:nth-child(odd){
    margin-right: 1.5%;
  }

  &:nth-child(even){
    margin-left: 1.5%;
  }
`

const PlanOnTitle = styled.h5`
  font-size: var(--font10);
  color: var(--text0);
`

const PlanOnContent = styled.p`
  position: relative;
  width: 100%;
  font-size: var(--font10);
  color: var(--text3);
  
  span{
    color: var(--red3);
  }
`

const PlanOffWrapper = styled.div`
  display: ${props => props.active ? "none" : "block"};
  margin-top: 7px;
`

const PlanOffMessage = styled.p`
  width: 100%;
  border-radius: 4px;
  background-color: var(--side5);
  padding: 8px 10px;
  color: vat(--text0);
  font-size: var(--font10);
  font-weight: 500;
  margin-bottom: 14px;
`

function PlanTalk({ active, count, point }){
    return(
        <>
            <PlanTalkWrapper>
                <PlanTalkBox>
                    <PlanTalkTitleWrapper>
                        <PlanTalkTitle>
                            플랜톡
                            <PlanTalkON active={active}>
                                {active ? "ON" : "OFF"}
                            </PlanTalkON>
                        </PlanTalkTitle>
                        <PlanCount>
                            {count}개 사용 중 | 잔여 포인트 {point}
                        </PlanCount>
                    </PlanTalkTitleWrapper>
                    {active && (
                        <Button
                            type="button"
                            content="설정"
                            style={{position: "absolute", top: "50%", transform: "translateY(-50%)", right: "0"}}
                            gray
                        />
                    )}
                </PlanTalkBox>

                {/* on 영역*/}
                <PlanOnWrapper active={active}>
                    <PlanOnBox type="button">
                        <PlanOnTitle>예약된 알림</PlanOnTitle>
                        <PlanOnContent>
                            상세보기
                            <Next fill="#C1C1C1" style={{position: "absolute", top: "50%", transform: "translateY(-50%)", right: "0", width: "12px", height: "8px"}} />
                        </PlanOnContent>
                    </PlanOnBox>

                    <PlanOnBox type="button">
                        <PlanOnTitle>보낸 알림</PlanOnTitle>
                        <PlanOnContent>
                            오늘 <span>0건</span>
                            <Next fill="#C1C1C1" style={{position: "absolute", top: "50%", transform: "translateY(-50%)", right: "0", width: "12px", height: "8px"}} />
                        </PlanOnContent>
                    </PlanOnBox>
                </PlanOnWrapper>

                {/* off 영역 */}
                <PlanOffWrapper active={active}>
                    <PlanOffMessage>
                        일일이 채팅하지 말고, 꼭 필요한 예약 메시지를 자동으로 고객에게 전달해 보세요!
                    </PlanOffMessage>

                    <Button type="button" content="플랜톡 사용하기" fullBlue />
                </PlanOffWrapper>
            </PlanTalkWrapper>
        </>
    )
}

export default PlanTalk;