import React from "react";
import styled from "styled-components";

import Header from "../../common/Header";
import IconCard from "../../components/Card/IconCard";
import FixedButton from "../../components/Button/FixedButton";

import Select from "react-select";
import {NavLink} from "react-router-dom";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 52px);
  margin: 52px auto 0 auto;
  padding: 14px 14px 71px 14px;
  
  & > div:not(:first-child){
    margin-top: 10px;
  }
`

function CustomerList(){
    const customers = [
        {id : 1, type: 'processOne', name: '김가은', address: '서울 수영구 수영로 472 서울 수영구 수영로 472', date: '22.04.22', pay: '1,240,000원'},
        {id : 2, type: 'processTwo', name: '김가은', address: '서울 수영구 수영로 472', date: '22.04.22', pay: '1,240,000원'},
        {id : 3, type: 'processThree', name: '김가은', address: '서울 수영구 수영로 472', date: '22.04.22', pay: '1,240,000원'},
        {id : 4, type: 'processFour', name: '김가은', address: '서울 수영구 수영로 472', date: '22.04.22', pay: '1,240,000원'},
        {id : 5, type: 'processFive', name: '김가은', address: '서울 수영구 수영로 472', date: '22.04.22', pay: '1,240,000원'},
        {id : 6, type: 'processSix', name: '김가은', address: '서울 수영구 수영로 472', date: '22.04.22', pay: '1,240,000원'}
    //     type명 변경해서 사용해주세요. 임의로 넣어두었습니다! components/IconCard 내의 useEffect type명도 함께 변경 필요
    ]

    const options = [
        { value: 'test1', label: '테스트1' }
    ]

    return(
        <>
            <Header title="고객" />
            <Container>
                <Select options={options} classNamePrefix="" />
                {/* 추후 style 수정 예정, react-select library 사용 */}

                {customers.map(customer => (
                    <NavLink to="/customer/v">
                        <IconCard
                            key={customer.id}
                            type={customer.type}
                            name={customer.name}
                            address={customer.address}
                            date={customer.date}
                            pay={customer.pay} />
                    </NavLink>
                ))}
            </Container>
            <FixedButton content="신규 명세표" />
        </>
    )
}

export default CustomerList;