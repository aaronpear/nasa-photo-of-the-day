import React from "react";

const Pictext = props => {
    const { explanation, copyright, date } = props;
    return (
        <div className='pic-description-container'>
            <p>{explanation}</p>
            <p>{copyright}</p>
            <p>{date}</p>
        </div>
    )
}

export default Pictext;