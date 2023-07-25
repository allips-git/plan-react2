import React from "react";
import styled from "styled-components";

import Header from "../../common/Header";

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
            <Container></Container>
        </>
    )
}

export default ProductSpec;
