import React from "react";
import styled from "styled-components";

import Header from "../../common/Header";
import DetailCard from "../../components/Card/DetailCard";
import BreakLine from "../../components/Line/BreakLine";
import MoreCountCard from "../../components/Card/MoreCountCard";
import Discount from "../../portals/Discount";
import Modal from "../../portals/Modal";
import PopupInput from "../../components/Popup/PopupInput";
import PopupMulti from "../../components/Popup/PopupMulti";
import PopupSelect from "../../components/Popup/PopupSelect";
import ButtonUnder from "../../components/Button/ButtonUnder";

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
                buttonContent: "메시지 발주",
                buttonOutsource: true
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
                blind: false
                ,
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
                buttonContent: "(올립스) 시스템 발주",
                buttonOutsource: false
            }
        ],
    },
];

function ProductSpec(){
    return(
        <>
            <Header title="명세서" />
            <Container>
                {productData.map((data, index) =>
                    (
                    <DetailCard key={index} {...data} />
                ))}
                <BreakLine />

                <MoreCountCard />

            </Container>

            {/*<Discount />*/}

            {/*<Modal title="계약정보">
                <PopupInput title="계약일" name="" placeholder="" disabled />
                <PopupInput title="시공일" name="" placeholder="" />
                <PopupSelect title="설치 시간" />
                <PopupSelect title="시공 담당" />
                <PopupMulti title="선금" name="" placeholder="" />
                <PopupInput title="메모" name="" placeholder="비고" />

                <ButtonUnder content="계약서 이동" onClick="" />
             </Modal>*/}
        </>
    )
}

export default ProductSpec;