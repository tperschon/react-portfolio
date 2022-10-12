import React from "react";
import portfolioItems from "../../assets/js/portfolioItems";
import Project from "./Project";

function Portfolio() {
    return (
        <section className="portfolio-list">
            {portfolioItems.map((item, i) => {return <Project item={item} key={i}/>})}
        </section>
    );
};

export default Portfolio;