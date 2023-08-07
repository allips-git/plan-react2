import React from "react";
import styled from "styled-components";
import InlineLabel from "../components/Input/InlineLabel";
import PopupInput from "../components/Popup/PopupInput";

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
  top: 0;
  left: 0;
`

const ModalBox = styled.div`
  width: 95%;
  height: 97%;
  margin: 0 auto;
  left: 0;
  right: 0;
  position: absolute;
  bottom: 0;
  background-color: var(--bg3);
  border-radius: 4px 4px 0 0;
  padding: 20px 16px;
`

const ModalTitle = styled.h2`
  width: 100%;
  color: var(--text0);
  font-size: var(--font16);
  font-weight: 700;
`

function Modal({ title, children }){
    return(
        <>
            <ModalWrapper>
                <ModalBox>
                    <ModalTitle>{title}</ModalTitle>
                    {children}
                </ModalBox>
            </ModalWrapper>
        </>
    )
}

export default Modal;