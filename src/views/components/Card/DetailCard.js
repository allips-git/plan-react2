import React from "react";
import styled from "styled-components";

const DetailWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid var(--line4);
`

const DetailTitle = styled.div`
  width: 100%;
  padding: 10px 16px;
  background-color: var(--line5);
  color: var(--text1);
  font-size: var(--font14);
`

const DetailContent = styled.div`
  width: 100%;
  padding: 26px 16px;
  border-top: 1px solid var(--line4);
`

const DetailProduct = styled.p`
  width: 100%;
  position: relative;
  color: var(--text3);
  font-weight: 400;
  font-size: var(--font12);
`

const DetailFigureWrapper = styled.div`
  width: 100%;
  display: flex;
`

const DetailFigure = styled.p`
  width: 65%;
  color: ${props => props.actual ? 'var(--red2)' : 'var(--blue3)'};
  font-weight: 700;
`

const DetailFigurePay = styled.p`
  width: 35%;
  color: var(--text1);
  text-align: right;
  font-weight: 700;
`

const DetailTableWrapper = styled.table`
  
`

function DetailCard({ title, product, actual, figure, pay }) {
    return (
        <>
            <DetailWrapper>
                <DetailTitle>
                    {title}
                </DetailTitle>

                <DetailContent>
                    <DetailProduct>
                        {product}
                    </DetailProduct>

                    <DetailFigureWrapper>
                        <DetailFigure actual={actual}>
                            {figure}
                        </DetailFigure>

                        <DetailFigurePay>
                            {pay}
                        </DetailFigurePay>
                    </DetailFigureWrapper>
                </DetailContent>
            </DetailWrapper>
        </>
    )
}

export default DetailCard;