import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
`

const Header = () => {
    // const { title } = props;
    return (
        <StyledHeader className='header'>
            <h1>NASA's Pic of the Day. WAU!</h1>
        </StyledHeader>
    )
}

export default Header;