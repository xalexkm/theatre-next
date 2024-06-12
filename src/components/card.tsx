"use client"
import styled from "styled-components";
import Image from "next/image";

const CardWrapper = styled.article`
        width: 200px;
        overflow: hidden;
        background-color: var(--primary-color);
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

export default function Card() {
    return <CardWrapper>
        <CardPoster>
            <Image priority style={imageStyle} height={300} width={100} src={`https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg`} alt={`Alt`} />
        </CardPoster>
        <CardDetails>
            <h2>Title</h2>
            <ReleaseDate>Release Date: 12/02/11</ReleaseDate>
        </CardDetails>
    </CardWrapper>
}