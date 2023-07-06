import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const AlertWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.60);
  display: flex;
  align-items: center;
`

const AlertModal = styled.div`
  width: 95%;
  max-width: 500px;
  background-color: var(--bg3);
  border-radius: 4px;
  box-shadow: 6px 16px 40px 0px rgba(0, 0, 0, 0.40);
  margin: 0 auto;
  padding: 32px 50px;
`

const AlertTitle = styled.h2`
  font-size: var(--font16);
  font-weight: 500;
  color: var(--text1);
  text-align: center;
  margin-bottom: 14px;
`

const AlertContent = styled.p`
  color: var(--text1);
  font-weight: 500;
  font-size: var(--font13);
  text-align: center;
  margin-bottom: 14px;
`

const AlertSpan = styled.p`
  color: var(--blue4);
  font-weight: 500;
  font-size: var(--font13);
  text-align: center;
`

function Alert({ title, content, buttonContent }){
    return(
        <>
            <AlertWrapper>
                <AlertModal>
                    <AlertTitle>{title}</AlertTitle>
                    <AlertContent>{content}</AlertContent>
                    <Button type="button" content={buttonContent} />
                </AlertModal>
            </AlertWrapper>
        </>
    )
}

export default Alert;