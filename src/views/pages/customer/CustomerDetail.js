import React from "react";
import Header from "../../common/Header";
import RoundTag from "../../components/RoundTag";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--bg3);
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 14px 14px 71px 14px;
`

function CustomerDetail() {
    return (
        <>
            <Header title="고객 상세"/>
            <Container>
                <RoundTag content="테스트"/>
            </Container>
        </>
    )
}

export default CustomerDetail;