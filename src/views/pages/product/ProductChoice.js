import React from "react";
import styled from "styled-components";

import Header from "../../common/Header";
import SmallButton from "../../components/Button/SmallButton";
import AccordionCard from "../../components/Card/AccordionCard";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 14px 14px 71px 14px;
`

const ButtonWrapper = styled.div`
  width: 100%;
  
  button + button{
    margin-left: 10px;
  }
`

// data
const ProductData = [
    {
        title: "쉬폰",
        content: "커튼",
        unit: "야드 6,000원",
        name: "test1",
        totalName: "test",
        disabled: false,
        expandedContent: [
            "가나",
            "다라마"
        ]
    },
    {
        title: "쉬폰",
        content: "커튼",
        unit: "야드 6,000원",
        name: "test2",
        totalName: "test",
        disabled: true,
        expandedContent: [
            "가나",
            "다라마"
        ]
    },
    {
        title: "쉬폰",
        content: "커튼",
        unit: "야드 6,000원",
        name: "test3",
        totalName: "test",
        disabled: false,
        expandedContent: [
            "가나",
            "다라마"
        ]
    }
]

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

                {ProductData.map((data, index) => (
                    <AccordionCard key={index} {...data} />
                ))}
            </Container>
        </>
    )
}

export default ProductChoice;