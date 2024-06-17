"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const CardWrapper = styled.article`
  height: 530px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-md);
  margin: var(--spacing-md);
  &:hover {
    opacity: 0.8;
    background-color: var(--background-color);
  }
`;

const CardPoster = styled.div`
  height: 400px;
`;

const CardPosterPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReleaseDate = styled.span`
  color: var(--text-color);
  font-size: var(--font-size-lg);
`;

const ImdbNumber = styled.span`
  color: var(--ba);
  font-size: var(--font-size-md);
`;

const CardDetails = styled.div`
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const CardTitle = styled.h2`
  font-size: var(--font-size-xl);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardDetailsBottom = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

interface CardProps {
  title: string;
  releaseDate: string;
  posterSrc?: string;
  moviePath: string;
}

const Card = ({ title, releaseDate, posterSrc, imdbId, moviePath }: CardProps) => (
  <Link href={moviePath}>
    <CardWrapper>
      {posterSrc ? (
        <CardPoster>
          <Image
            priority
            style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "100%"}}
            height={400}
            width={300}
            src={posterSrc}
            alt={`${title} poster`}
          />
        </CardPoster>
      ) : (
        <CardPosterPlaceholder>
          <span>No Image Available</span>
        </CardPosterPlaceholder>
      )}
      <CardDetails>
        <CardTitle>{title}</CardTitle>
        <CardDetailsBottom>
          <ImdbNumber>{imdbId}</ImdbNumber>
          <ReleaseDate>{releaseDate}</ReleaseDate>
        </CardDetailsBottom>
      </CardDetails>
    </CardWrapper>
  </Link>
);

export default memo(Card);
