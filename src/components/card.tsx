"use client"
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const CardWrapper = styled.article`
        position: relative;
        width: 200px;
        height: 450px;
        overflow: hidden;
        background-color: var(--secondary-color);
        border-radius: var(--border-radius-md);
        box-shadow: var(--box-shadow-md);
        &:hover {
          opacity: 0.8;
          background-color: var(--background-color);
        }
`;

const CardPoster = styled.div`
        height: 300px;
        width: 200px;
`;

const ReleaseDate = styled.span`
        color: var(--text-color);
`;

const CardDetails = styled.div`
        padding: var(--spacing-md);
`;

const imageStyle = {
    width: "100%",
    height: "100%",
    objectPosition: "center",
    objectFit: "cover"
};

const CardTitle = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default function Card({ title, releaseDate, posterSrc, moviePath}) {
    return <Link href={moviePath}>
        <CardWrapper>
            <CardPoster>
                <Image priority style={imageStyle} height={300} width={100} src={posterSrc} alt={`${title} poster`} />
            </CardPoster>
            <CardDetails>
                <CardTitle>{ title }</CardTitle>
                <ReleaseDate>Release Date: { releaseDate }</ReleaseDate>
            </CardDetails>
        </CardWrapper>
    </Link>
}