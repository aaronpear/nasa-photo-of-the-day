import React from "react";
import styled from "styled-components";

const StyledPic = styled.div`
    /* display: flex;
    flex-direction: column;
    margin: 2%; */
    box-sizing: content-box;
    position: fixed;
    z-index: -1;
    object-fit: cover;
    width: 100%;
    height: 100%;

    a {
        color: black;
        border: 2px solid black;
        background-color: white;
    }
`

const Picoftheday = props => {
    const { explanation, hdurl, url } = props;

    return (
        <StyledPic className='pic-container'>
            <img src={hdurl} alt={explanation} />
           { <a href={hdurl} target='_blank' rel='noopener noreferrer'>See it in high resolution here!</a> }
        </StyledPic>
    )
}

export default Picoftheday;