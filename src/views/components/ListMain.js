import React from "react";
import styled from "styled-components";
import Button from "./Button";

import NextButton from "../../assets/images/btn-next.svg";

const ListWrapper = styled.div`
  width: 100%;
  padding: 22px 16px;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0,0,0,.04);
  background-color: var(--bg3);
`

const ListTitleWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: center;
`

const ListTitle = styled.h2`
  color: var(--text0);
  font-size: var(--font18);
  font-weight: 700;
  width: 100%;
`

const ListItemWrapper = styled.ul`
  width: 100%;
`

const ListItem = styled.li`
  display: block;
  width: 100%;
  position: relative;
  list-style: decimal;
  
  & + & {
    margin-top: 24px;
  }
`

const ListItemTitle = styled.p`
  color: var(--text0);
  font-size: var(--font12);
  font-weight: 700;
`

const ListItemDescription = styled.p`
  color: var(--text3);
  font-size: var(--font10);
  font-weight: 500;
`

const ButtonNext = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`

function ListMain({items, title, content}){
    return(
        <>
            <ListWrapper>
                <ListTitleWrapper>
                    <ListTitle>{title}</ListTitle>
                    <Button content={content}/>
                </ListTitleWrapper>
                <ListItemWrapper>
                    {items.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemTitle>{item.txt}</ListItemTitle>
                            <ListItemDescription>{item.description}</ListItemDescription>
                            <ButtonNext src={NextButton} alt="다음 버튼" title="다음 버튼" />
                        </ListItem>
                    ))}
                </ListItemWrapper>
            </ListWrapper>
        </>
    )
}

export default ListMain;