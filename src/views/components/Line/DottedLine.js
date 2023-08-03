import React from "react";
import styled from "styled-components";

const LineWrapper = styled.div`
  width: 100%;
  padding: 18px 0;
`

const LineBorder = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px dashed var(--line4);
`

function DottedLine(){
    return(
        <>
            <LineWrapper>
                <LineBorder />
            </LineWrapper>
        </>
    )
}

export default DottedLine;