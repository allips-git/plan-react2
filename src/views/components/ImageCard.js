import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 48.5%;
  display: flex;
  background-color: var(--bg3);
  box-shadow: 0 2px 2px rgba(0,0,0,.04);
  border-radius: 4px;
  align-items: center;
  padding: 12px 14px;
  
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
  display: flex;
  
  p{
    margin-left: 3px;
  }
`

const CardTxt = styled.p`
  font-weight: 400;
  font-size: var(--font10);
  color: var(--text4);
`

const CardCount = styled.h1`
  font-weight: 700;
  font-size: var(--font22);
`

function ImageCard({link, src, title, content}){
    return(
        <>
            <CardWrapper>
                <CardContent href={link}>
                    <CardTitle>
                        <CardImage
                            src={src}
                            alt={title}
                            title={title}
                        />
                        <p>
                            {title}
                        </p>
                    </CardTitle>
                    <CardTxt>
                        {content}
                    </CardTxt>
                </CardContent>
            </CardWrapper>
        </>
    )
}

export default ImageCard;