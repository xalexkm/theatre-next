"use client"
import styled from "styled-components";
import Link from "next/link";

const HeaderWrapper = styled.header`
    height: 80px;
    width: 100%;
    background-color: var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 var(--spacing-md) 0;
    a {
      color: var(--text-color);
      :hover {
        color: var(--text-color);
      }
    }
    a > span {
      display: block;
      width: 1000px;
      font-size: var(--font-size-lg);
    }
`;

export default function Header() {
    return <HeaderWrapper><Link href={'/'}><span>Theatre App</span></Link></HeaderWrapper>
}