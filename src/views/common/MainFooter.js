import React from "react";
import styled from "styled-components";

import {ReactComponent as Home} from "../../assets/images/icon-home.svg";
import {ReactComponent as Average} from "../../assets/images/icon-average.svg";
import {ReactComponent as Calender} from "../../assets/images/icon-calender.svg";
import {ReactComponent as Graph} from "../../assets/images/icon-graph.svg";
import {ReactComponent as Setting} from "../../assets/images/icon-setting.svg";

const HomeIcon = ({...props}) => (
    <Home {...props} />
)

const FooterOuter = styled.ul`
  background-color: var(--bg3);
  display: flex;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`

const FooterList = styled.li`
  width: 20%;
  text-align: center;
`

const FooterIcon = styled(HomeIcon)`
  display: block;
  margin: 0 auto;
  height: 22px;
  fill: #D8D8DC;
`

const FooterTxt = styled.p`
  width: 100%;
  color: var(--text4);
  font-weight: 700;
  font-size: var(--font10);
  display: block;
`

function MainFooter(){
    return(
        <>
            <FooterOuter>
                <FooterList>
                    <FooterIcon />
                    <FooterTxt>홈</FooterTxt>
                </FooterList>
                <FooterList>
                    <Calender fill="#D8D8DC" style={{display: "block", margin: "0 auto", height: "22px"}} />
                    <FooterTxt>캘린더</FooterTxt>
                </FooterList>
                <FooterList>
                    <Graph fill="#D8D8DC" style={{display: "block", margin: "0 auto", height: "22px"}} />
                    <FooterTxt>회계</FooterTxt>
                </FooterList>
                <FooterList>
                    <Average fill="#D8D8DC" style={{display: "block", margin: "0 auto", height: "22px"}} />
                    <FooterTxt>통계</FooterTxt>
                </FooterList>
                <FooterList>
                    <Setting fill="#D8D8DC" style={{display: "block", margin: "0 auto", height: "22px"}} />
                    <FooterTxt>설정</FooterTxt>
                </FooterList>
            </FooterOuter>
        </>
    )
}

export default MainFooter;