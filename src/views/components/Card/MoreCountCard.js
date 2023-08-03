import React, {useState} from "react";
import styled from "styled-components";

import InlineLabel from "../Input/InlineLabel";

import MoreBtn from "../../../assets/images/btn-next.png";
import SlideToggle from "../Toggle/SlideToggle";
import DottedLine from "../Line/DottedLine";
import ButtonUnder from "../Button/ButtonUnder";
import ButtonMulUnder from "../Button/ButtonMulUnder";

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
  cursor: pointer;
`

const CardShowMoreBtn = styled.img`
  margin-left: 10px;
  transition: transform .3s ease;
  transform: ${({ showMore }) => (showMore ? "rotateZ(90deg)" : "rotateZ(0)")};
`

const CardMoreWrapper = styled.div`
  width: 100%;
  height: ${({ showMore }) => (showMore ? "160px" : "0")};
  overflow: hidden;
  transition: height 0.3s ease;
`

const CardMoreOuter = styled.div`
  margin: 30px 0;
`

const ToggleWrapper = styled.div`
  width: 100%;
  display: flex;
`

const ToggleTitle = styled.div`
  width: 50%;
  color: var(--text2);
  font-size: var(--font15);
`

const ToggleBox = styled.div`
  width: 50%;
  text-align: right;
`

const ContentWrapper = styled.div`
    width: 100%;
`

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  & + &{
    margin-top: 13px;
  }
`

const ContentCount = styled.p`
  width: 50%;
  text-align: right;
  font-weight: 700;
  font-size: var(--font16);
  color: ${props => props.red ? "var(--red1)" : "var(--text1)"};
  
  span{
    font-size: var(--font12);
    font-weight: 500;
  }
`

const ContentTitle = styled.h2`
  width: 50%;
  color: var(--text1);
  font-size: var(--font18);
`

const ContentSumCount = styled.h2`
  width: 50%;
  color: var(--blue2);
  font-size: var(--font20);
  text-align: right;
  
  span{
    font-weight: 500;
    font-size: var(--font12);
  }
`

function useInputChange(initialValue)
{
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return [value, handleChange];
}

function MoreCountCard() {
    const [discountValue, handleDiscountChange] = useInputChange("");
    const [amountValue, handleAmountChange] = useInputChange("");
    const [showMore, setShowMore] = useState(false);

    const handleShowMoreClick = () => {
        setShowMore(!showMore);
    }

    return (
        <>
            <CardWrapper>
                <CardHeadWrapper>
                    <CardTitleWrapper>
                        <CardTitle>제품 결제 내역</CardTitle>
                        <CardShowMore onClick={handleShowMoreClick}>
                            더보기
                            <CardShowMoreBtn src={MoreBtn} alt="more" title="more" showMore={showMore} />
                        </CardShowMore>
                    </CardTitleWrapper>

                    <CardMoreWrapper showMore={showMore}>
                        <CardMoreOuter>
                            <InlineLabel
                                label="할인 금액"
                                name=""
                                value={discountValue}
                                onChange={handleDiscountChange}
                            />
                            <InlineLabel
                                label="추가 금액"
                                name=""
                                value={amountValue}
                                onChange={handleAmountChange}
                                red
                            />
                        </CardMoreOuter>

                        <ToggleWrapper>
                            <ToggleTitle>천원단위 절삭 </ToggleTitle>
                            <ToggleBox>
                                <SlideToggle />
                            </ToggleBox>
                        </ToggleWrapper>
                    </CardMoreWrapper>
                </CardHeadWrapper>

                <DottedLine />

                <ContentWrapper>
                    <ContentBox>
                        <ToggleTitle>상품 금액</ToggleTitle>
                        <ContentCount>
                            603,253<span>원</span>
                        </ContentCount>
                    </ContentBox>
                    <ContentBox>
                        <ToggleTitle>할인</ToggleTitle>
                        <ContentCount red>
                            -50,000<span>원</span>
                        </ContentCount>
                    </ContentBox>
                    <ContentBox>
                        <ToggleTitle>절삭 할인</ToggleTitle>
                        <ContentCount red>
                            -3,253<span>원</span>
                        </ContentCount>
                    </ContentBox>
                </ContentWrapper>

                <DottedLine />

                <ContentWrapper>
                    <ContentBox>
                        <ContentTitle>총 결제 금액</ContentTitle>
                        <ContentSumCount>
                            550,000<span>원</span>
                        </ContentSumCount>
                    </ContentBox>
                </ContentWrapper>
            </CardWrapper>

            <ButtonMulUnder content1="견적서 저장" content2="계약서 이동" />
        </>
    )
}

export default MoreCountCard;