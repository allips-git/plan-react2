import React, {useState} from "react";
import styled from "styled-components";

import Header from "../../common/Header";
import InputLabel from "../../components/InputLabel";
import InputCheck from "../../components/InputCheck";
import Select from "react-select";
import {NavLink} from "react-router-dom";
import ButtonUnder from "../../components/ButtonUnder";
import ImageThumbnail from "../../components/ImageThumbnail";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 14px 14px 71px 14px;
  
  div + div{
    margin-top: 20px;
  }
`

const CheckOuter = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  border-radius: 2px;
  border: 1px solid var(--line4);
  background-color: var(--bg3);
  padding: 18px 8px;
`

const CheckLabel = styled.p`
  color: var(--text3);
  font-size: var(--font10);
  font-weight: 500;
  position: absolute;
  padding: 0 2px;
  background-color: var(--bg3);
  top: -8px;
  left: 6px;
`

const CheckUl = styled.ul`
  width: 100%;
  text-align: center;
`

const CheckItem = styled.li`
  display: inline-block;
  
  & + &{
    margin-left: 10px;
  }
`

function useInputChange(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return [value, handleChange];
}

function JoinSetting(){
    const [storeValue, handleStoreChange] = useInputChange("");
    const [addressValue, handleAddressChange] = useInputChange("");
    const [detailValue, handleDetailChange] = useInputChange("");
    const [numberValue, handleNumberChange] = useInputChange("");
    const [pointValue, handlePointChange] = useInputChange("");
    const [urlValue, handleUrlChange] = useInputChange("");
    const [suggestValue, handleSuggestChange] = useInputChange("");

    const service = [
        { value: 'test1', label: '테스트1' },
        { value: 'test2', label: '테스트2' },
        { value: 'test3', label: '테스트3' },
        { value: 'test4', label: '테스트4' }
    ]

    return(
        <>
            <Header title="매장 설정 2/3" />
            <Container>
                <ImageThumbnail name="uploadProfile" />

                <InputLabel
                    label="매장 이름"
                    placeholder="매장 이름을 입력하세요."
                    type="text"
                    name="store"
                    value={storeValue}
                    onChange={handleStoreChange}
                    vital
                />

                <InputLabel
                    label="주소"
                    type="text"
                    name="store"
                    value={addressValue}
                    onChange={handleAddressChange}
                    vital
                />

                <InputLabel
                    label="매장 상세주소"
                    type="text"
                    name="store"
                    value={detailValue}
                    onChange={handleDetailChange}
                    vital
                />

                <InputLabel
                    label="대표 전화번호"
                    placeholder="매장 전화번호를 입력하세요."
                    type="text"
                    name="store"
                    value={numberValue}
                    onChange={handleNumberChange}
                    vital
                />

                {/* 서비스분야 select */}
                <Select options={service} />
                {/* 추후 style 수정 예정, react-select library 사용 */}

                <InputLabel
                    label="대표 화물 지점"
                    placeholder="대표 화물 지점을 입력하세요."
                    type="text"
                    name="store"
                    value={pointValue}
                    onChange={handlePointChange}
                />

                <InputLabel
                    label="홍보 홈페이지 URL"
                    placeholder="www.domain.com"
                    type="text"
                    name="store"
                    value={urlValue}
                    onChange={handleUrlChange}
                />

                <CheckOuter>
                    <CheckLabel>매장 운영일</CheckLabel>
                    <CheckUl>
                        <CheckItem>
                            <InputCheck label="월" name="mon" />
                        </CheckItem>
                        <CheckItem>
                            <InputCheck label="화" name="tues" />
                        </CheckItem>
                        <CheckItem>
                            <InputCheck label="수" name="wens" />
                        </CheckItem>
                        <CheckItem>
                            <InputCheck label="목" name="thurs" />
                        </CheckItem>
                        <CheckItem>
                            <InputCheck label="금" name="fri" />
                        </CheckItem>
                        <CheckItem>
                            <InputCheck label="토" name="sat" />
                        </CheckItem>
                        <CheckItem>
                            <InputCheck label="일" name="sun" />
                        </CheckItem>
                    </CheckUl>
                </CheckOuter>

                {/* 매장 운영시간 select */}

                <InputLabel
                    label="추천공장 코드"
                    placeholder="추천공장 코드를 입력하세요"
                    type="text"
                    name="store"
                    value={suggestValue}
                    onChange={handleSuggestChange}
                />
            </Container>
            
            <NavLink to="/login/joinus">
                <ButtonUnder content="저장" />
            </NavLink>
        </>
    )
}

export default JoinSetting;