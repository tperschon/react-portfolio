import React from "react";
import proficiencies from "../../assets/js/proficiencies";
import Proficiency from "./Proficiency";

function Resume() {
    return (
        <section className="resume">
            <h1>Resume</h1>
            <div className="download">
                download button goes here
            </div>
            <h2>Front-end Proficiencies:</h2>
            <ul className="front-end">
                {proficiencies.frontend.map((prof) => { return <Proficiency prof={prof}/>})}
            </ul>
            <h2>Back-end Proficiencies:</h2>
            <ul className="back-end">
                {proficiencies.backend.map((prof) => { return <Proficiency prof={prof}/>})}
            </ul>
        </section>
    );
};

export default Resume;