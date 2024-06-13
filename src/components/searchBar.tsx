"use client"
import styled from "styled-components";
import {useEffect, useState} from "react";
import MoviesList from "./moviesList";
import {searchMoviesByTitle} from "../lib/api";
import useThrottle from "../app/hooks/useThrottle";

const SearchBarInput = styled.input`
  display: block;
  height: 40px;
  width: 400px;
  margin: 0 auto;
  border-radius: var(--border-radius-md);
  background-color: var(--secondary-color);
  &::placeholder {
    color: var(--text-color);
  }
`;

const SearchBarWrapper = styled.div`
  width: 100%;
  margin: var(--spacing-md) 0;
`;

const SearchBarTitle = styled.h2`
  margin: var(--spacing-md) 0 var(--spacing-md) var(--spacing-lg);
`;

export default function SearchBar() {
    const [input, setInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const throttledInput = useThrottle(input, 1000);

    useEffect(() => {
        if (throttledInput.trim() !== '') {
            searchMoviesByTitle(throttledInput).then((res) => setSearchResults(res));
        } else {
            setSearchResults([]);
        }
    }, [throttledInput]);

    return <SearchBarWrapper>
        <SearchBarInput placeholder="Search for a movie..." value={input} onChange={(e) => setInput(e.target.value)}>
        </SearchBarInput>
        {
            (searchResults && searchResults.length > 0) && <>
                <SearchBarTitle>Searched Movies</SearchBarTitle>
                <MoviesList moviesData={searchResults} />
            </>
        }
    </SearchBarWrapper>
}