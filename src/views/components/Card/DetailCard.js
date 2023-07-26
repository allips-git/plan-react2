import React from "react";
import styled from "styled-components";
import ColorTag from "../Tag/ColorTag";
import DetailCardContent from "./DetailCardContent";

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

function DetailCard({ title, data }) {
    return (
        <>
            <DetailWrapper>
                <DetailTitle>
                    {title}
                </DetailTitle>

                <DetailCardContent data={data} />
            </DetailWrapper>
        </>
    )
}

export default DetailCard;