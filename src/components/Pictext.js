import React from "react";
import styled from 'styled-components';

const StyledText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2.5%;
    border: 2px outset black;
    box-shadow: 12px 12px 2px 1px lightgrey;
    padding: 1% 1%;
    background-color: white;
    width: 35%;
    opacity: 0.05;
    transition-property: opacity;
    transition-duration: 1s;

    :hover {
        opacity: 1;
    }
`

const Pictext = props => {
    const { explanation, copyright, date, title } = props;
    return (
        <StyledText className='pic-description-container'>
            <h2>{title}</h2>
            <p>{explanation}</p>            
            <p>{copyright}, {date}</p>
        </StyledText>
    )
}

export default Pictext;