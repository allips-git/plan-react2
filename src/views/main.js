import React from "react";
import styled from "styled-components";

import MainHeader from "./common/MainHeader";
import MainFooter from "./common/MainFooter";
import ImageCard from "./components/ImageCard";
import CountList from "./components/CountList";
import ListMain from "./components/ListMain";

import Banner from "../assets/images/img-banner.png";
import Monitor from "../assets/images/img-monitor.png";
import Ruler from "../assets/images/img-ruler.png";
import Factory from "../assets/images/img-factory.png";
import Talk from "../assets/images/img-talk.png";

const MainBox = styled.div`
  background-color: var(--bg2);
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 14px 14px 71px 14px;
  
  & > div:not(:first-child){
    margin-top: 10px;
  }
`

const MainBanner = styled.img`
  width: 100%;
`

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  
  flex-wrap: wrap;
  flex-direction: row;
`

const MainCounts = [
    {count:'1', txt:'견적'},
    {count:'1', txt:'발주'},
    {count:'1', txt:'시공'},
    {count:'1', txt:'결제'},
    {count:'1', txt:'A/S'}
]

const MessageList = [
    {txt: '매장의 방역관리 알리기', description: '코로나 19로 인해 고객님들이 걱정하고 있습니다.'},
    {txt: '매장의 방역관리 알리기', description: '코로나 19로 인해 고객님들이 걱정하고 있습니다.'},
    {txt: '매장의 방역관리 알리기', description: '코로나 19로 인해 고객님들이 걱정하고 있습니다.'}
]

function Main() {
    return (
        <>
            <MainHeader />
            <MainBox>
                <MainBanner src={Banner} title="배너" alt="배너" />
                <MainMenu>
                    <ImageCard link="/customer" src={Monitor} title="고객관리" content="전체고객<span>247명</span>"></ImageCard>
                    <ImageCard src={Ruler} title="견적등록" content="모든 업무가 원클릭"></ImageCard>
                    <ImageCard src={Factory} title="견적등록" content="시스템 공장 <span>5개</span> 사용중"></ImageCard>
                    <ImageCard src={Talk} title="견적등록" content="알림 <span>1종</span>을 사용중입니다."></ImageCard>
                </MainMenu>
                <CountList items={MainCounts} />
                <ListMain title="첫 방문 환영 문자" content="메시지 추가" items={MessageList} />
            </MainBox>
            <MainFooter />
        </>

    );
}

export default Main;