import React from "react";

const Picoftheday = props => {
    const { explanation, hdurl, url } = props;

    return (
        <div className='pic-container'>
            <img src={url} alt={explanation} /><br />
            <a href={hdurl} target='_blank' rel='noopener noreferrer'>See it in high resolution here!</a>
        </div>
    )
}

export default Picoftheday;