import React from "react";
import {styled, css} from "styled-components";

const ListWrapper = styled.ul`
  width: 100%;
  background-color: var(--bg3);
  display: flex;
  padding: 14px 0;
  border-radius: 4px;

  ${props =>
          props.main &&
          css`
            border: 1px solid var(--line4);
          `
  }
`

const ListItem = styled.li`
  width: ${({width}) => width}%;
  text-align: center;

  & + & {
    border-left: 1px solid var(--line5);
  }
`

const ListCount = styled.h3`
  color: var(--blue2);
  font-weight: 700;
  font-size: var(--font18);
`

const ListTxt = styled.p`
  color: var(--text2);
  font-weight: 500;
  font-size: var(--font11);
`

function CountList({items, main}) {
    const widthPercentage = 100 / items.length;

    return (
        <>
            <ListWrapper main={main}>
                {items.map((item, index) => (
                    <ListItem key={index} width={widthPercentage}>
                        <ListCount>{item.count}</ListCount>
                        <ListTxt>{item.txt}</ListTxt>
                    </ListItem>
                ))}
            </ListWrapper>
        </>
    )
}

export default CountList;