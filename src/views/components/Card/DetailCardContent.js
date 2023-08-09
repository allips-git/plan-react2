import React from "react";
import styled from "styled-components";
import ColorTag from "../Tag/ColorTag";

const DetailContentWrapper = styled.div`
  width: 100%;
`

const DetailContent = styled.div`
  width: 100%;
  padding: 26px 16px;
  border-top: 1px solid var(--line4);
`

const DetailProduct = styled.p`
  width: 100%;
  position: relative;
  color: var(--text3);
  font-weight: 400;
  font-size: var(--font12);
  margin-bottom: 11px;
`

const DetailFigureWrapper = styled.div`
  width: 100%;
  display: flex;
`

const DetailFigure = styled.p`
  width: 65%;
  color: ${props => props.actual ? 'var(--red2)' : 'var(--blue3)'};
  font-weight: 700;
  font-size: var(--font13);
`

const DetailFigurePay = styled.p`
  width: 35%;
  color: var(--text1);
  text-align: right;
  font-weight: 700;
  font-size: var(--font13);
`

const DetailTableWrapper = styled.table`
  border: 0;
  width: 100%;
  text-align: center;
  font-size: var(--font10);
  font-weight: 400;
  table-layout: fixed;
  margin: 10px 0;
`

const DetailTableHeader = styled.thead`
  color: var(--text3);
  
  tr{
    th{
      height: 24px;
      font-weight: 400;
    }
  }
`

const DetailTableBody = styled.tbody`
  color: var(--text1);
  font-size: var(--font14);
  
  tr{
    td{
      height: 16px;
      font-weight: 700;
    }
  }
`

const TagWrapper = styled.div`
  width: 100%;
  margin-bottom: 8px;
`

const DetailBtn = styled.button`
  width: 100%;
  padding: 14px 36px;
  color: var(--text5);
  border-radius: 2px;
  background-color: ${props => props.outsource ? "var(--side1)" : "var(--blue4)"};
  font-weight: 700;
  font-size: var(--font13);
  margin-top: 20px;
`

const getTableHeaderContent = (blind) => {
    if (blind) {
        return (
            <tr>
                <th>가로</th>
                <th>세로</th>
                <th>가공</th>
                <th>분할</th>
                <th>규격</th>
            </tr>
        );
    } else {
        return (
            <tr>
                <th>가로</th>
                <th>세로</th>
                <th>좌</th>
                <th>우</th>
                <th>규격</th>
            </tr>
        );
    }
};

function DetailCardContent({ data, button }){
    return(
        <>
            <DetailContentWrapper>
                {data.map((item, index) => (
                    <DetailContent key={index}>
                        <DetailProduct>
                            {item.product}
                        </DetailProduct>

                        <DetailFigureWrapper>
                            <DetailFigure actual={item.actual}>
                                {item.figure}
                            </DetailFigure>

                            <DetailFigurePay>
                                {item.pay}
                            </DetailFigurePay>
                        </DetailFigureWrapper>

                        <DetailTableWrapper>
                            <DetailTableHeader>
                                {getTableHeaderContent(item.blind)}
                            </DetailTableHeader>

                            <DetailTableBody>
                                {item.specs.map((spec, specIndex) => (
                                    <tr key={specIndex}>
                                        <td>{spec.width}</td>
                                        <td>{spec.height}</td>
                                        <td>{spec.left}</td>
                                        <td>{spec.right}</td>

                                        <td>{spec.size}</td>
                                    </tr>
                                ))}
                            </DetailTableBody>
                        </DetailTableWrapper>

                        {item.tags.length > 0 && (
                            <TagWrapper>
                                {item.tags.map((tag, tagIndex) => (
                                    <ColorTag key={tagIndex} content={tag} />
                                ))}
                            </TagWrapper>
                        )}

                        <TagWrapper>
                            <ColorTag orange content="지시사항: 동해물과 백두산이" />
                        </TagWrapper>

                        {item.buttonContent && (
                            <DetailBtn outsource={item.buttonOutsource}>
                                {item.buttonContent}
                            </DetailBtn>
                        )}
                    </DetailContent>
                ))}
            </DetailContentWrapper>
        </>
    )
}

export default DetailCardContent;