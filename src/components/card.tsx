"use client"
import styled from "styled-components";
import Image from "next/image";

const CardWrapper = styled.article`
        width: 200px;
        overflow: hidden;
        background-color: var(--secondary-color);
        border-radius: var(--border-radius-md);
        box-shadow: var(--box-shadow-md);
`;

const CardPoster = styled.div`
        height: 300px;
        width: 200px;
`;

const ReleaseDate = styled.span`
        color: var(--text-color);
`;

const CardDetails = styled.div`
        width: 100%;
        padding: var(--spacing-md);
`;

const imageStyle = {
    width: "100%",
    height: "100%",
    objectPosition: "center",
    objectFit: "cover"
};

export default function Card({ title, releaseDate, posterSrc}) {
    return <CardWrapper>
        <CardPoster>
            <Image priority style={imageStyle} height={300} width={100} src={posterSrc} alt={`Alt`} />
        </CardPoster>
        <CardDetails>
            <h2>{ title }</h2>
            <ReleaseDate>Release Date: { releaseDate }</ReleaseDate>
        </CardDetails>
    </CardWrapper>
}