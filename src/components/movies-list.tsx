'use client'
import styled from "styled-components";
import Card from "./card";

const MoviesListWrapper = styled.section`
  display: flex;
  gap: var(--spacing-md);
  background-color: var(--primary-color);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
`;

export default function MoviesList({ moviesData }) {

    const movies = [{title: 'Title', released: '12/12/23'}, {title: 'Title', released: '12/12/23'}];

    return <MoviesListWrapper>
        { movies.map((movie) => <Card title={movie.title} releaseDate={movie.released} />)}
    </MoviesListWrapper>
}