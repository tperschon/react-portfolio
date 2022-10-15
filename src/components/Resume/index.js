import React from "react";
import proficiencies from "../../assets/js/proficiencies";
import Proficiency from "./Proficiency";
import resume from '../../assets/docs/timperschon-resume.pdf';

// simple Resume page with a download capability, pulls proficiencies from a file and maps each type into separate lists
function Resume() {
    return (
        <section className="resume">
            <h1>Resume</h1>
            <div className="download">
                Download my <a href={resume} download="timperschon-resume">resume</a>.
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