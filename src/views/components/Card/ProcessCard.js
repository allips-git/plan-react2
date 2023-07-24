import React from "react";
import styled from "styled-components";

const ProcessWrapper = styled.div`
  width: 100%;
  padding: 16px 15px;
  border-radius: 4px;
  border: 1.5px solid var(--line3);
`;

const ProcessTitle = styled.h3`
  width: 100%;
  position: relative;
  color: var(--text1);
  font-size: var(--font14);
  font-weight: 700;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--line5);

  span {
    font-weight: 500;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const ProcessBar = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 10px;
  background-color: var(--line5);
`;

const ProcessTextWrapper = styled.ul`
  width: 100%;
  display: flex;
`;

const ProcessText = styled.li`
  display: block;
  font-size: var(--font11);
  font-weight: 400;
  color: var(--text3);
  width: ${({ width }) => width}%;
  text-align: center;
`;

const ProcessDate = styled.p`
  color: var(--text1);
  display: none;
`

function ProcessCard({ title, pay, items }) {
    const widthPercentage = 100 / items.length;

    return (
        <>
            <ProcessWrapper>
                <ProcessTitle>
                    {title}
                    <span>{pay}원</span>
                </ProcessTitle>
                <ProcessBar />
                <ProcessTextWrapper>
                    {items.map((item, index) => (
                        <ProcessText key={index} width={widthPercentage}>
                            {item.txt}
                            <ProcessDate>
                                {item.date}
                            </ProcessDate>
                        </ProcessText>
                    ))}
                </ProcessTextWrapper>
            </ProcessWrapper>
        </>
    );
}

export default ProcessCard;