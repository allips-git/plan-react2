import React from "react";
import styled from "styled-components";

import Header from "../../common/Header";
import IconCard from "../../components/IconCard";

const Container = styled.div`
  background-color: var(--bg3);
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
        {id : 1, type: 'a'},
        {id : 2, type: 'b'},
        {id : 3, type: 'c'},
        {id : 4, type: 'd'},
        {id : 5, type: 'e'}
    ]

    return(
        <>
            <Header title="고객" />
            <Container>
                {customers.map(customer => (
                    <IconCard key={customer.id} type={customer.type} />
                ))}
            </Container>
        </>
    )
}

export default CustomerList;