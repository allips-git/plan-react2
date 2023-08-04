import React, { useState } from "react";
import styled from "styled-components";

const PopupWrapper = styled.div`
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

const PopupBox = styled.div`
  margin: 0 auto;
  padding: 32px 26px;
  border-radius: 4px;
  background-color: var(--bg3);
  box-shadow: 6px 16px 40px 0 rgba(0, 0, 0, 0.4);
  width: 90%;
`

const PopupTitle = styled.h2`
  width: 100%;
  color: var(--text0);
  font-weight: 500;
  font-size: var(--font16);
  text-align: center;
`

const InputWrapper = styled.div`
  width: 100%;
  border-radius: 2px;
  border: 1px solid var(--line4);
  overflow: hidden;
  display: flex;
  color: var(--text1);
  font-size: var(--font13);
  position: relative;
  margin-top: 14px;
`

const InputButton = styled.button`
  width: 25%;
  padding: 10px 14px;
  background-color: ${props => (props.active ? "var(--blue4)" : "var(--bg3)")};
  color: ${props => (props.active ? "var(--text5)" : "var(--text1)")};

  & + &,
  & + input {
    border-left: 1px solid var(--line4);
  }
`

const InputBox = styled.input`
  width: 50%;
  padding: 10px 30px 10px 14px;
  text-align: right;
`

const InputUnit = styled.span`
  position: absolute;
  top: 52%;
  transform: translateY(-50%); 
  right: 14px;
`

const TextareaBox = styled.input`
  width: 100%;
  padding: 10px 14px;
`

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 25px;
`

const ButtonContent = styled.button`
  width: 48%;
  padding: 12px 36px;
  background-color: ${(props) => props.primary ? "var(--blue4)" : "var(--button1)"};
  color: ${(props) => props.primary ? "var(--text5)" : "var(--text0)"};
  font-weight: 700;
  font-size: var(--font13);
  text-align: center;
  border: 0;
  border-radius: 2px;

  & + &{
    margin-left: 4%;
  }
`

function Discount() {
    const [isFixedDiscount, setFixedDiscount] = useState(true);

    return (
        <>
            <PopupWrapper>
                <PopupBox>
                    <PopupTitle>할인</PopupTitle>
                    <InputWrapper>
                        <InputButton
                            active={isFixedDiscount}
                            onClick={() => setFixedDiscount(true)}
                        >
                            정액
                        </InputButton>
                        <InputButton
                            active={!isFixedDiscount}
                            onClick={() => setFixedDiscount(false)}
                        >
                            %
                        </InputButton>
                        <InputBox type="number" />
                        <InputUnit>{isFixedDiscount ? "원" : "%"}</InputUnit>
                    </InputWrapper>

                    <InputWrapper>
                        <TextareaBox type="text" placeholder="메모" />
                    </InputWrapper>

                    <ButtonWrapper>
                        <ButtonContent>취소</ButtonContent>
                        <ButtonContent primary>확인</ButtonContent>
                    </ButtonWrapper>
                </PopupBox>
            </PopupWrapper>
        </>
    );
}

export default Discount;
