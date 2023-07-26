import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

const ListStatus = styled.div`
  width: 38px;
  height: 38px;
  line-height: 39px;
  font-size: var(--font11);
  font-weight: 700;
  text-align: center;
  color: var(--text5);
  border-radius: 6px;
  background-color: ${props => props.color};
`;

const ListName = styled.p`
  font-size: var(--font13);
  font-weight: 500;
  color: var(--text1);
  width: 55%;
  padding-left: 13px;
  
  span{
    font-size: var(--font10);
    color: var(--text4);
    display: block;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
`

const ListPay = styled.p`
  font-size: var(--font13);
  color: var(--text1);
  font-weight: 500;
  text-align: right;
  width: calc(45% - 38px);
  
  span{
    display: block;
    font-size: var(--font10);
    color: var(--text4);
    font-weight: 400;
  }
`

function IconCard({ cd, type, name, address, date, pay }) {
    const [color, setColor] = useState('');
    const [content, setContent] = useState('');

    let clientNavigate = useNavigate();

    useEffect(() => {
        switch (type) 
        {
            case '002':
                setColor('#C2E4FF');
                setContent('대기');
                break;
            case '003':
                setColor('#409AFF');
                setContent('견적');
                break;
            case '005':
                setColor('#0061FF');
                setContent('발주');
                break;
            case '008':
                setColor('#233CF9');
                setContent('시공');
                break;
            case '017':
                setColor('#292D77');
                setContent('결제');
                break;
            case '031':
                setColor('#EBEBEB');
                setContent('완료');
            break;
            case 'processSix':
                setColor('#F51000');
                setContent('A/S');
                break;
            case 'N':
                setColor('#FF718B');
                setContent('취소');
                break;
            default:
                setColor('');
                setContent('');
                break;
        }
    }, [type]);

    return (
        <>
            <ListWrapper onClick={()=>{
                clientNavigate('/customer/v', {
                    state : {
                        CLIENT_CD : cd
                    }
                })
            }}>
                <ListStatus color={color}>
                    {content}
                </ListStatus>
                <ListName>
                    {name}
                    <span>{address}</span>
                </ListName>
                <ListPay>
                    <span>{date}</span>
                    {pay}
                </ListPay>
            </ListWrapper>
        </>
    );
}

export default IconCard;
