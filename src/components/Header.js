import React from "react";

const Header = props => {
    const { title } = props;
    return (
        <div className='header'>
            <h1>NASA's Pic of the Day. WAU!</h1>
            <h2>{title}</h2>
        </div>
    )
}

export default Header;