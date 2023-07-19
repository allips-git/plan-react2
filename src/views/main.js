import React from "react";
import styled from "styled-components";

import MainHeader from "./common/MainHeader";
import MainFooter from "./common/MainFooter";
import ImageCard from "./components/ImageCard";
import CountList from "./components/CountList";
import ListMain from "./components/ListMain";

import Banner from "../assets/images/img-banner.png";
import Factory from "../assets/images/img-factory.svg";
import Truck from "../assets/images/img-truck.svg";


// css
const MainBox = styled.div`
  background-color: var(--bg2);
  width: 100%;
  min-height: calc(100vh - 195px);
  margin: 0 auto;
  padding: 14px 14px 71px 14px;
  
  & > div:not(:first-child){
    margin-top: 14px;
  }
`

const MainBanner = styled.img`
  width: 100%;
  margin-top: 52px;
`

const MainMenuBox = styled.div`
  width: 100%;
  background-color: var(--bg3);
  padding: 0 14px;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.06);
`

const MainMenuTitleBox = styled.div`
  width: 100%;
  color: var(--text0);
  line-height: var(--font22);
  padding-top: 16px;
  
  &::after{
    content: '';
    display: block;
    clear: both
  ;
  }
`

const MainMenuTitle = styled.h2`
  font-size: var(--font16);
  float: left;
  display: inline-block;
  vertical-align: middle;
`

const MainMenuCount = styled.h1`
  font-size: var(--font22);
  float: right;
  display: inline-block;
  vertical-align: middle;
`

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  
  flex-wrap: wrap;
  flex-direction: row;
`

const MessageSample = styled.a`
  text-align: center;
  padding: 10px;
  width: 100%;
  display: block;
  font-size: var(--font12);
  font-weight: 700;
  color: var(--text0);
`


// data
const MainCounts = [
    {count:'1', txt:'견적'},
    {count:'1', txt:'발주'},
    {count:'1', txt:'시공'},
    {count:'1', txt:'결제'},
    {count:'1', txt:'A/S'}
]

const MessageList = [
    {txt: '매장의 방역관리 알리기', description: '코로나 19로 인해 고객님들이 걱정하고 있습니다.들이 걱정하고 있습니다.'},
    {txt: '매장의 방역관리 알리기', description: '코로나 19로 인해 고객님들이 걱정하고 있습니다.'}
]

function Main() {
    return (
        <>
            <MainHeader />
            <MainBanner src={Banner} title="배너" alt="배너" />
            <MainBox>
                <MainMenuBox>
                    <MainMenuTitleBox>
                        <MainMenuTitle>전체고객</MainMenuTitle>
                        <MainMenuCount>1명</MainMenuCount>
                    </MainMenuTitleBox>
                    <CountList items={MainCounts} />
                </MainMenuBox>

                <MainMenu>
                    <ImageCard
                        link="/customer"
                        src={Factory}
                        title="공장"
                        content="공장 전체"
                        count="0"
                        color="#78BBFF"
                    />
                    <ImageCard
                        src={Truck}
                        title="배송 대기"
                        content="공장 전체"
                        count="0"
                        color="#FFCE6D"
                    />
                </MainMenu>

                <ListMain
                    title="매장전용 메시지"
                    content="메시지 추가"
                    items={MessageList}
                />
                
                <MainMenuBox>
                    <MessageSample>메시지 샘플 보기</MessageSample>
                </MainMenuBox>
            </MainBox>
            <MainFooter />
        </>

    );
}

export default Main;