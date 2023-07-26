import React from "react";
import styled from "styled-components";

import Header from "../../common/Header";
import DetailCard from "../../components/Card/DetailCard";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 14px 14px 71px 14px;
  
  & > div + div {
    margin-top: 20px;
  }
`

const productData = [
    {
        title: "작은방",
        data: [
            {
                product: "우드텍",
                actual: true,
                // actual true면 실측
                figure: "블라인드 실측",
                pay: "0원",
                blind: true,
                // blind true면 가공/분할, false면 좌/우
                specs: [
                    { width: "240", height: "120", left: "1", right: "양개", size: "2회베" }
                ],
                tags: "",
            },
        ],
    },
    {
        title: "상품 제목 2",
        data: [
            {
                product: "상품 2",
                actual: false,
                figure: "아르카디아 아이스화이트",
                pay: "150,000원",
                blind: false,
                specs: [
                    { width: "240", height: "120", left: "1", right: "0", size: "2회베" },
                    { width: "240", height: "120", left: "1", right: "0", size: "2회베" }
                ],
                tags: ["형상옵션", "솜피 알투스 402모터", "레일추가", "투톤: 기둥 아이보리 3폭 / 안쪽 화이트 2폭"],
            },
            {
                product: "상품 2",
                actual: false,
                figure: "아르카디아 아이스화이트",
                pay: "150,000원",
                blind: false,
                specs: [
                    { width: "240", height: "120", left: "1", right: "0", size: "2회베" },
                    { width: "240", height: "120", left: "1", right: "0", size: "2회베" }
                ],
                tags: ["형상옵션", "솜피 알투스 402모터", "레일추가", "투톤: 기둥 아이보리 3폭 / 안쪽 화이트 2폭"],
            }
        ],
    },
];

function ProductSpec(){
    return(
        <>
            <Header title="명세서" />
            <Container>
                {productData.map((data, index) => (
                    <DetailCard key={index} {...data} />
                ))}
            </Container>
        </>
    )
}

export default ProductSpec;