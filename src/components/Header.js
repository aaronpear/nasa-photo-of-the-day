import React from "react";

const Header = props => {
    const { title, date } = props;
    console.log(title + date);
    return (
        <div className='header'>
            <h1>NASA's Pic of the Day. WAU!</h1>
            <h2>{title}</h2>
            <h3>{date}</h3>
        </div>
    )
}

export default Header;