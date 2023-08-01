import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid var(--line4);
  padding: 16px;
`

const CardTitleWrapper = styled.div`
  width: 100%;
  
  &::after{
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

const CardMoreWrapper = styled.div`
  width: 100%;
  margin: 30px 0;
`

const CardMoreInputWrapper = styled.div`
  display: flex;
  width: 100%;
`

const CardMoreInputTitle = styled.label`
  width: 50%;
  color: var(--text3);
  font-size: var(--font13);
  font-weight: 500;
  text-align: left;
`

const CardMoreInputBox = styled.div`
  float: right;
  width: 40%;
  border-radius: 2px;
  border: 1px solid var(--line4);
`

function MoreCountCard(){
    return(
        <>
            <CardWrapper>
                <CardTitleWrapper>
                    <CardTitle>제품 결제 내역</CardTitle>

                    <CardMoreWrapper>
                        <CardMoreInputWrapper>
                            <CardMoreInputTitle>할인 금액</CardMoreInputTitle>
                        </CardMoreInputWrapper>
                    </CardMoreWrapper>
                </CardTitleWrapper>
            </CardWrapper>
        </>
    )
}

export default MoreCountCard;