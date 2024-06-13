"use client";
import styled from "styled-components";
import Card from "./card";
import { device } from "../styles/breakpoints";
import { memo } from "react";

const MoviesListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  background-color: var(--primary-color);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;

  @media ${device.md} {
    justify-content: center;
  }
`;

const MoviesList = ({ moviesData }) => {
  return (
    <MoviesListWrapper>
      {moviesData.map((movie) => (
        <Card
          key={movie.id}
          title={movie.title}
          releaseDate={movie.year}
          posterSrc={movie.posterSrc}
          moviePath={movie.moviePath}
        />
      ))}
    </MoviesListWrapper>
  );
};

export default memo(MoviesList);
