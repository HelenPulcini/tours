import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <h3>{name}</h3>
                <div className="tour-info">
                    <h4 className="tour-price">${price}</h4>
                    <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
                    <button onClick={() => setReadMore(!readMore)} className="more-btn">{readMore ? 'show less' : 'read more'} </button>
                </div>
                <button onClick={() => removeTour(id)} className="delete-btn">not interested</button>
            </footer>
        </article>
    );
};

export default Tour;