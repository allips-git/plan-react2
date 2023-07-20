import React from "react";
import styled from "styled-components";
import Button from "../components/Button/Button";

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.60);
  display: flex;
  align-items: center;
`

const Modal = styled.div`
  width: 95%;
  max-width: 500px;
  background-color: var(--bg3);
  border-radius: 4px;
  box-shadow: 6px 16px 40px 0px rgba(0, 0, 0, 0.40);
  margin: 0 auto;
  padding: 32px 50px;
`

const ModalTitle = styled.h2`
  font-size: var(--font16);
  font-weight: 500;
  color: var(--text1);
  text-align: center;
  margin-bottom: 14px;
`

const ModalContent = styled.p`
  color: var(--text1);
  font-weight: 500;
  font-size: var(--font13);
  text-align: center;
  margin-bottom: 14px;
`

function Choice({ title, content }){
    return(
        <>
            <ModalWrapper>
                <Modal>
                    <ModalTitle>{title}</ModalTitle>
                    <ModalContent>{content}</ModalContent>
                    <Button type="button" content="취소"></Button>
                    <Button type="button" content="확인"></Button>
                </Modal>
            </ModalWrapper>
        </>
    )
}

export default Choice;