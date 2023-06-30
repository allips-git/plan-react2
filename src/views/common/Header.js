import React from "react";
import styled from "styled-components";

import BtnPrev from "../../assets/images/btn-prev.svg";
import {useNavigate} from "react-router-dom";

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--bg3);
  display: flex;
  padding: 16px 20px;
  align-items: center;
`

const PrevButton = styled.img`
  min-width: 16px;
`

const HeaderTitle = styled.h2`
  width: 100%;
  color: var(--text1);
  font-size: var(--font14);
  font-weight: 700;
  text-align: center;
`

function Header({title}){
    const navigate = useNavigate();
    const onClickBtn = () => {
        navigate(-1);
    }

    return(
        <>
            <HeaderWrapper>
                <PrevButton onClick={() => onClickBtn()} src={BtnPrev} alt="이전" title="이전" />
                <HeaderTitle>{title}</HeaderTitle>
            </HeaderWrapper>
        </>
    )
}

export default Header;