import React, {useState} from "react";
import styled from "styled-components";

import Header from "../../common/Header";
import InputLabel from "../../components/InputLabel";
import InputCheck from "../../components/InputCheck";

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
  height: 40px;
  margin: 0 auto;
  border-radius: 2px;
  border: 1px solid var(--line4);
  background-color: var(--bg3);
  padding: 10px 14px;
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
`

function JoinSetting(){
    const [storeValue, setStoreValue] = useState("");

    const handleStoreChange = (event) => {
        setStoreValue(event.target.value);
    };

    return(
        <>
            <Header title="매장 설정 2/3" />
            <Container>
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
                    value={storeValue}
                    onChange={handleStoreChange}
                    vital
                />

                <InputLabel
                    label="매장 상세주소"
                    type="text"
                    name="store"
                    value={storeValue}
                    onChange={handleStoreChange}
                    vital
                />

                <InputLabel
                    label="대표 전화번호"
                    placeholder="매장 전화번호를 입력하세요."
                    type="text"
                    name="store"
                    value={storeValue}
                    onChange={handleStoreChange}
                    vital
                />

                {/* 서비스분야 select */}

                <InputLabel
                    label="대표 화물 지점"
                    placeholder="대표 화물 지점을 입력하세요."
                    type="text"
                    name="store"
                    value={storeValue}
                    onChange={handleStoreChange}
                />

                <InputLabel
                    label="홍보 홈페이지 URL"
                    placeholder="www.domain.com"
                    type="text"
                    name="store"
                    value={storeValue}
                    onChange={handleStoreChange}
                />

                <CheckOuter>
                    <CheckLabel>매장 운영일</CheckLabel>
                    <CheckUl>
                        <CheckItem>
                            <InputCheck label="일" name="sun" />
                        </CheckItem>
                        <CheckItem>
                            <InputCheck label="일" name="sun" />
                        </CheckItem>
                        <CheckItem>
                            <InputCheck label="일" name="sun" />
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
                    value={storeValue}
                    onChange={handleStoreChange}
                />
            </Container>
        </>
    )
}

export default JoinSetting;