import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 48.5%;
  height: fit-content;
  min-height: 167px;
  display: flex;
  background-color: var(--bg3);
  box-shadow: 0 2px 2px rgba(0,0,0,.04);
  border-radius: 4px;
  text-align: center;
  align-items: center;
  padding: 30px 10px;
  margin-bottom: 3%;
  
  &:nth-child(odd){
    margin-right: 1.5%;
  }
  
  &:nth-child(even){
    margin-left: 1.5%;
  }
`

const CardContent = styled.a`
  width: 100%;
  display: block;
`

const CardImage = styled.img`
  max-width: 100%;
`

const CardTitle = styled.h3`
  font-weight: 700;
  font-size: var(--font14);
  color: var(--text0);
`

const CardTxt = styled.p`
  font-weight: 500;
  font-size: var(--font11);
  color: var(--text4);
  
  & > span{
    font-weight: 700;
    color: var(--side9);
  }
`

function ImageCard({link, src, title, content}){
    return(
        <>
            <CardWrapper>
                <CardContent href={link}>
                    <CardImage src={src} alt={title} title={title} />
                    <CardTitle>{title}</CardTitle>
                    <CardTxt dangerouslySetInnerHTML={{ __html: content }} />
                </CardContent>
            </CardWrapper>
        </>
    )
}

export default ImageCard;