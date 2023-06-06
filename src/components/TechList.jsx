import React from "react";
import styled from "styled-components";

export const TechListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    li {
        color: ${({ theme }) => theme.global.techList.textColor};
        border: 1px dotted ${({ theme }) => theme.global.techList.itemBorder};
        padding: 0.5em 1em;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* margin-bottom: 1em; */
    }
`;

const TechList = ({ list }) => {
    const techList = list.map((obj, index) => <li key={index}>{obj}</li>);
    return <TechListStyled>{techList}</TechListStyled>;
};

export default TechList;
