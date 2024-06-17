"use client";
import styled from "styled-components";
import Card from "./card";
import { device } from "../styles/breakpoints";
import { memo } from "react";

const MoviesListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--primary-color);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;

  @media ${device.md} {
    justify-content: center;
  }
`;

const MovieItemWrapper = styled.div`
  flex-basis: calc(100% / 3);
`;

const MoviesList = ({ moviesData }) => {
  return (
    <MoviesListWrapper>
      {moviesData.map((movie) => (
        <MovieItemWrapper key={movie.id}>
          <Card
              title={movie.title}
              releaseDate={movie.year}
              posterSrc={movie.posterSrc}
              moviePath={movie.moviePath}
              imdbId={movie.id}
          />
        </MovieItemWrapper>
      ))}
    </MoviesListWrapper>
  );
};

export default memo(MoviesList);
