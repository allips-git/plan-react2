import React from "react";
import styled from "styled-components";

import InlineLabel from "../Input/InlineLabel";

import MoreBtn from "../../../assets/images/btn-next.png";

const CardWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid var(--line4);
  padding: 16px;
`

const CardHeadWrapper = styled.div`
  width: 100%;
`

const CardTitleWrapper = styled.div`
  width: 100%;

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`

const CardTitle = styled.h3`
  float: left;
  font-size: var(--font16);
  font-weight: 500;
  color: var(--text1);
`

const CardShowMore = styled.p`
  float: right;
  font-size: var(--font13);
  font-weight: 400;
`

const CardShowMoreBtn = styled.img`
  margin-left: 10px;
`

const CardMoreWrapper = styled.div`
  width: 100%;
  margin: 30px 0;
`

function MoreCountCard() {
    return (
        <>
            <CardWrapper>
                <CardHeadWrapper>
                    <CardTitleWrapper>
                        <CardTitle>제품 결제 내역</CardTitle>
                        <CardShowMore>
                            더보기
                            <CardShowMoreBtn src={MoreBtn} alt="more" title="more" />
                        </CardShowMore>
                    </CardTitleWrapper>

                    <CardMoreWrapper>
                        <InlineLabel
                            label="할인 금액"
                            name=""
                        />
                        <InlineLabel
                            label="추가 금액"
                            name=""
                            red
                        />
                    </CardMoreWrapper>
                </CardHeadWrapper>
            </CardWrapper>
        </>
    )
}

export default MoreCountCard;