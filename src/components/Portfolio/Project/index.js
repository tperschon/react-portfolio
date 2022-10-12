import React from "react";

function Project(props) {
    return (
        <div className="portfolio-item">
            <a href={props.item.url}><img  src={props.item.image} alt={props.item.alt}></img></a>
        </div>
    );
};

export default Project;