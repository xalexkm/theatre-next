"use client"
import styled from "styled-components";

const HeaderWrapper = styled.header`
    height: 80px;
    width: 100%;
    background-color: var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 var(--spacing-md) 0;
    span {
      width: 1000px;
      font-size: var(--font-size-lg);
    }
`;

export default function Header() {
    return <HeaderWrapper><span>Theatre App</span></HeaderWrapper>
}