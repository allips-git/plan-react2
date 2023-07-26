import $ from 'jquery';

import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer"
import styled from "styled-components";

import { commas, fncAjax, fncAjaxFail, url } from "../../../dev/function.js";

import Header from "../../common/Header";
import IconCard from "../../components/Card/IconCard";
import FixedButton from "../../components/Button/FixedButton";

import { setClientList } from "../../../slice/clientListSlice.js"

import Select from "react-select";

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
    const dispatch = useDispatch();
    const location = useLocation();
    const state    = location.state;

    const [ref, inView] = useInView();

    let [pageNum, setPageNum] = useState(20);
    let [flag , setFlag]      = useState(true);
    
    const clientList = useSelector((state) => state.clientList);

    const getClientList = useCallback(async () => {
        let params = {
            uc : 'AA001-UL-01',
            sc : '',
            op : '',
            li : pageNum
        };

        fncAjax(`${url}/client/clientList`, "POST", params).done(function (data) {
            dispatch(setClientList(data));

            if(data['list'].length !== pageNum)
            {
                setFlag(false)
            }
            else
            {
                setFlag(true)
            }
        }).fail(fncAjaxFail);
    }, [pageNum]);

    useEffect(() => {
        if (inView && flag) 
        {
            setPageNum((state) => {
                return state + 20;
            })
        }
    }, [inView]);

    useEffect(() => {
        if(flag)
        {
            getClientList()
        }
    } , [getClientList]);

    const options = [
        { value: 'test1', label: '테스트1' }
    ]

    return(
        <>
            <Header title="고객" />
            <Container>
                <Select options={options} classNamePrefix="" />
                {/* 추후 style 수정 예정, react-select library 사용 */}
                {clientList.list.length > 0 ? (
                    clientList.list.map((item) => (
                        <IconCard
                            key={item.CLIENT_CD}
                            cd={item.CLIENT_CD}
                            type={item.ST_CD}
                            name={item.CLIENT_NM}
                            address={item.ADDR + item.ADDR_DETAIL}
                            date={item.REG_DT}
                            pay={commas(item.AMT)+'원'}/>
                    ))
                ) : (
                    <></>
                )}
            </Container>
            <FixedButton content="신규 명세표" />
        </>
    )
}

export default CustomerList;