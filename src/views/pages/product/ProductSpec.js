import React from "react";
import styled from "styled-components";

import Header from "../../common/Header";
import DetailCard from "../../components/Card/DetailCard";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 14px 14px 71px 14px;
`

function ProductSpec(){
    return(
        <>
            <Header title="명세서" />
            <Container>
                <DetailCard
                    title="작은방"
                    product="우드텍"
                    figure="아르카디아 아이스화이트"
                    pay="120,000원"
                />
            </Container>
        </>
    )
}

export default ProductSpec;