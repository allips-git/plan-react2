import React from "react";
import styled from "styled-components";

const CusListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 12px;
`

const CusListTitle = styled.p`
  color: var(--text2);
  font-size: var(--font12);
  font-weight: 400;
  min-width: 50px;
  margin-right: 18px;
`

const CusListContent = styled.p`
  color: var(--text1);
  font-size: var(--font12);
  font-weight: 500;
`

function LineText({ title, content }){
    return(
        <>
            <CusListItem>
                <CusListTitle>{title}</CusListTitle>
                <CusListContent>{content}</CusListContent>
            </CusListItem>
        </>
    )
}

export default LineText;