import React from "react";
import styled from "styled-components";

const TagWrapper = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 20px;
  font-weight: 700;
  font-size: var(--font10);
  color: ${ props => props.orange ? "var(--side3)" : "var(--side1)" };
  background-color: ${ props => props.orange ? "var(--side4)" : "var(--side2)" };
  margin-right: 8px;

  & + &{
    margin-bottom: 6px;
  }
`

function ColorTag({ content, orange }){
    return(
        <>
            <TagWrapper orange={orange}>{content}</TagWrapper>
        </>
    )
}

export default ColorTag;