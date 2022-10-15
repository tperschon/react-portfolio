import React from "react";
import portfolioItems from "../../assets/js/portfolioItems";
import Project from "./Project";

// feed array of portfolioItems into Project to render each item uniformly with its own attributes being used
function Portfolio() {
    return (
        <section className="portfolio-list">
            {portfolioItems.map((item, i) => {return <Project item={item} key={i}/>})}
        </section>
    );
};

export default Portfolio;