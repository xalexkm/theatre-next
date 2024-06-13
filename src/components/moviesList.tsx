'use client'
import styled from "styled-components";
import Card from "./card";

const MoviesListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  background-color: var(--primary-color);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;
`;

export default function MoviesList({ moviesData }) {

    return <MoviesListWrapper>
        { moviesData.map((movie) => <Card key={movie.id} title={movie.title} releaseDate={movie.year} posterSrc={movie.poster} moviePath={movie.moviePath} />)}
    </MoviesListWrapper>
}