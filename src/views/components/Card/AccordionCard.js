import React, {useState} from "react";
import styled from "styled-components";

const AccordionWrapper = styled.label`
  width: 100%;
  background-color: var(--bg3);
  padding: 24px 16px;
  position: relative;
  display: block;
  border-bottom: 1px solid var(--line4);
`

const AccordionTitle = styled.h3`
  color: ${props => props.disabled ? "var(--red3)" : "var(--text1)"};
  font-size: var(--font16);
`

const TitleDisabled = styled.span`
  display: ${props => props.disabled ? "inline" : "none"};
`

const AccordionDescription = styled.p`
  color: var(--text3);
  font-size: var(--font14);
  font-weight: 400;
`

const AccordionUnit = styled.p`
  color: var(--text1);
  font-size: var(--font14);
  font-weight: 400;
`

const InputWrapper = styled.input`
  display: none;

  &:checked + span {
    box-shadow: 0 0 0 6px var(--blue4) inset;
  }
`

const InputButton = styled.span`
  display: ${props => props.disabled ? "none" : "block"};
  background-color: var(--bg3);
  width: 22px;
  height: 22px;
  border-radius: 2rem;
  box-shadow: 0 0 0 1px var(--line4) inset;
  margin-right: 11px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`

const ExpandedWrapper = styled.div`
  width: 100%;
  background-color: var(--line6);
`;

const ExpandedItem = styled.label`
  display: block;
  width: 100%;
  padding: 14px 16px;
  text-align: center;
  border-bottom: 1px solid var(--line4);
  position: relative;
  font-size: var(--font14);
  color: ${props => (props.disabled ? "var(--red3)" : "var(--text1)")};
`;

const ExpandedDisabled = styled.span`
  display: ${props => (props.disabled ? "inline" : "none")};
`;

function AccordionCard({ title, content, unit, disabled, name, totalName, expandedContent, expandName, expandTotalName }) {
    // name = label for, radio id
    // totalName = radio button name
    // expandedName = expanded label for, radio id
    // expandedTotalName = expanded radio button name

    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    }

    return (
        <>
            <AccordionWrapper for={name}>
                <AccordionTitle disabled={disabled}>
                    {title}
                    <TitleDisabled disabled={disabled}> (주문불가)</TitleDisabled>
                </AccordionTitle>

                <AccordionDescription>
                    {content}
                </AccordionDescription>

                <AccordionUnit>
                    {unit}
                </AccordionUnit>

                <InputWrapper
                    type="radio"
                    id={name}
                    name={totalName}
                    disabled={disabled}
                    checked={expanded}
                    onChange={handleToggle}
                />

                <InputButton disabled={disabled}/>
            </AccordionWrapper>
            {expanded && expandedContent && expandedContent.length > 0 && (
                <ExpandedWrapper>
                    {expandedContent.map((item, index) => (
                        <ExpandedItem key={index} disabled={disabled} for={expandName}>
                            {item}
                            <ExpandedDisabled disabled={disabled}> (주문불가)</ExpandedDisabled>

                            <InputWrapper id={expandName} name={expandTotalName}/>
                            <InputButton />
                        </ExpandedItem>
                    ))}
                </ExpandedWrapper>
            )}
        </>
    )
}

export default AccordionCard;