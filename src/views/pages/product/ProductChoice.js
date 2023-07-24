import React from "react";
import styled from "styled-components";

import Header from "../../common/Header";
import SmallButton from "../../components/Button/SmallButton";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 14px 14px 71px 14px;
  
  & > div:not(:first-child){
    margin-top: 10px;
  }
`

const ButtonWrapper = styled.div`
  width: 100%;
  
  button + button{
    margin-left: 10px;
  }
`

function ProductChoice(){
    return(
        <>
            <Header title="제품선택" />
            <Container>
                <ButtonWrapper>
                    <SmallButton content="실측 불러보기" />
                    <SmallButton content="커튼 실측" />
                    <SmallButton content="블라인드 실측" />
                </ButtonWrapper>
            </Container>
        </>
    )
}

export default ProductChoice;