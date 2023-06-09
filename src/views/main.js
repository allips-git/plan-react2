import React from "react";
import MainHeader from "./common/MainHeader";
import styled from "styled-components";
import MainFooter from "./common/MainFooter";

const MainBox = styled.div`
  background-color: var(--bg2);
  width: 100%;
  height: 100vh;
`

function Main() {
    return (
        <>
            <MainHeader />
            <MainBox></MainBox>
            <MainFooter />
        </>
    );
}

export default Main;