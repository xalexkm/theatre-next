"use client"
import styled from "styled-components";
import Image from "next/image";


const MovieDetailsWrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  background-color: var(--secondary-color);
`;

const imageStyle = {
    height: "100%",
    objectPosition: "center",
    objectFit: "cover"
};

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


export default function MovieDetails({ movieDetails }) {

    return <MovieDetailsWrapper>
        <Image priority style={imageStyle} height={500} width={200} src={movieDetails.posterSrc} alt={`${movieDetails.title} poster`} />
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
}