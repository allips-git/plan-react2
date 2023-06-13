import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ListStatus = styled.div`
  width: 38px;
  height: 38px;
  font-size: var(--font11);
  font-weight: 700;
  text-align: center;
  color: var(--text5);
  border-radius: 6px;
  background-color: ${props => {
    switch (props.type) {
      case 'a':
        return 'var(--blue6)';
      case 'b':
        return 'var(--blue3)';
      case 'c':
        return 'var(--blue1)';
      case 'd':
        return 'var(--navy1)';
      case 'e':
          return 'var(--red1)';
      default:
        return 'transparent';
    }
  }};
`;

function IconCard({ type }) {
    const [content, setContent] = useState('');

    useEffect(() => {
        switch (type) {
            case 'a':
                setContent('대기');
                break;
            case 'b':
                setContent('견적');
                break;
            case 'c':
                setContent('발주');
                break;
            case 'd':
                setContent('시공');
                break;
            case 'e':
                setContent('A/S');
                break;
            default:
                setContent('');
                break;
        }
    }, [type]);

    return (
        <>
            <ListWrapper>
                <ListStatus type={type}>
                    {content}
                </ListStatus>
            </ListWrapper>
        </>
    );
}

export default IconCard;
