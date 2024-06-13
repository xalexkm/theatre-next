"use client"
import styled, {CSSProperties} from "styled-components";
import Image from "next/image";
import {memo} from "react";
import {device} from "../styles/breakpoints";


const MovieDetailsWrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  background-color: var(--secondary-color);
  @media ${device.md} {
    flex-direction: column;
  }
`;

const imageStyle = {
    objectPosition: "center",
    objectFit: "cover"
} as CSSProperties;

const MovieDetailsDescription = styled.section`
    height: 100%;
`;

const MovieDetailsTitle = styled.h1`
    padding: var(--spacing-sm);
`;

const MovieDetailsDescriptionList = styled.ul`
    margin: var(--spacing-md);
    list-style-type: none;
`;

const MovieDetailsDescriptionListItem = styled.li`
    padding: var(--spacing-sm) 0;
`;

const MovieDetailsPoster = styled.div`
    align-self: center;
`;

const MovieDetails = ({ movieDetails }) => <MovieDetailsWrapper>
    <MovieDetailsPoster>
        <Image priority style={imageStyle} height={500} width={350} src={movieDetails.posterSrc} alt={`${movieDetails.title} poster`} />
    </MovieDetailsPoster>
    <MovieDetailsDescription>
        <MovieDetailsTitle>{movieDetails.title}</MovieDetailsTitle>
        <MovieDetailsDescriptionList>
            <MovieDetailsDescriptionListItem>Genre: { movieDetails.genre }</MovieDetailsDescriptionListItem>
            <MovieDetailsDescriptionListItem>Language: { movieDetails.language }</MovieDetailsDescriptionListItem>
            <MovieDetailsDescriptionListItem>Actors: { movieDetails.actors }</MovieDetailsDescriptionListItem>
            <MovieDetailsDescriptionListItem>Rated: { movieDetails.rated }</MovieDetailsDescriptionListItem>
        </MovieDetailsDescriptionList>
    </MovieDetailsDescription>
</MovieDetailsWrapper>


export default memo(MovieDetails);