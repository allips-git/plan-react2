import React from "react";
import styled from "styled-components";

const LineWrapper = styled.div`
  width: 100%;
  padding: 14px 0;
`

const LineBorder = styled.div`
  width: 100%;
  height: 8px;
  background-color: var(--line5);
  border-top: 1px solid var(--line2);
`

function BreakLine(){
    return(
        <>
            <LineWrapper>
                <LineBorder />
            </LineWrapper>
        </>
    )
}

export default BreakLine;