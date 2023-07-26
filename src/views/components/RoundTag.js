import React from "react";
import styled, {css} from "styled-components";

const TagWrapper = styled.a`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 10px;
  font-size: var(--font11);
  background-color: var(--blue4);
  color: var(--text5);
  line-height: 11px;

  ${props =>
          props.blue &&
          css`
            background-color: var(--blue4);
            color: var(--text5);
          `
  }
`

function RoundTag({content, ...rest}) {
    return (
        <>
            <TagWrapper {...rest} href={"tel:"+content}>{content}</TagWrapper>
        </>
    )
}

export default RoundTag;