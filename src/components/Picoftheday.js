import React from "react";

const Picoftheday = props => {
    const { copyright, date, explanation, hdurl, url } = props;

    return (
        <div className='pic-container'>
            <img src={hdurl} alt={explanation} />
            <p>{explanation}</p>
            <p>{copyright}</p>
            <p>{date}</p>
        </div>
    )
}

export default Picoftheday;