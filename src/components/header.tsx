"use client";
import styled from "styled-components";
import Link from "next/link";
import {device} from "../styles/breakpoints";

const HeaderWrapper = styled.header`
  height: 80px;
  width: 100%;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 var(--spacing-md) 0;
`;

const StyledLink = styled(Link)`
    color: var(--text-color);
    &:hover {
        color: var(--text-color);
    }
`;

const LinkText = styled.span`
    display: block;
    width: 1000px;
    font-size: var(--font-size-lg);
    @media ${device.lg} {
      width: 100%;
    }
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <StyledLink href="/">
                <LinkText>Theatre App</LinkText>
            </StyledLink>
        </HeaderWrapper>
    );
}