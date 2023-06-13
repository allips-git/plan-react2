import React from "react";
import styled from "styled-components";

import IconProfile from "../../assets/images/icon-profile.png";
import IconNotice from "../../assets/images/icon-notice.svg";

const HeaderOuter = styled.div`
  width: 100%;
  padding: 13px 18px;
  background-color: var(--bg3);
  color: var(--text1);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-size: var(--font14);
  font-weight: 700;
  text-align: center;
  width: calc(100% - 42px);
`

const ProfileIcon = styled.img`
  display: block;
`

const NoticeIcon = styled.img`
  display: block;
`

function MainHeader(){
    return(
        <>
            <HeaderOuter>
                <ProfileIcon src={IconProfile} />
                <Title>디자인윈도우</Title>
                <NoticeIcon src={IconNotice} />
            </HeaderOuter>
        </>
    )
}

export default MainHeader;