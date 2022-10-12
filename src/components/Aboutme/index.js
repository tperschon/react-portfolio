import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


function About() {
    const style = { fontSize: "75px" }
    return (
        <div className="content">
        <h2>About Me</h2>
        <FontAwesomeIcon icon={faCircleUser} style={style}/>
            <p className="aboutme">Hi, I'm the person at the top. The purpose of this section is to give you a better idea about me. I enjoy many of the things that most other people do, such as music, art, TV and movies, games, puzzles and more. In each of the following paragraphs, I'll touch on one of these subjects followed by a paragraph touching on my experience with technology.</p>
            <p className="aboutme">For what most people would consider 'normal' music, I enjoy a wide variety, from classNameical to metal to pop. Some of my preferences come from other interests, such as a liking for particular video game sound tracks. My favorite band would have to be NSP, but honestly my alltime favorite pieces of music are big emotional pieces, whether they're slow and sad or fast and intense.</p>
            <p className="aboutme">In terms of art, I'm particularly partial to art that expounds upon other interests of mine. Things that really draw me more into a fantasy world, whether it's relating to Star Trek or Dark Souls. Don't get me wrong, art that isn't related to other interests can still be great, it's more so that my liking of art is more superficial, so you can probably guess that I'm not super fond of abstract art.</p>
            <p className="aboutme">There's so much visual media to go over that it's impossible to really include it all. Some of my favorites have to be Star Trek, Battlestar Galactica, M*A*S*H, Death Note and Lord of the Rings. There are so many more I could include, it's just too hard to choose!</p>
            <p className="aboutme">Games is a broad term but it's also accurate. Whether it's pen and paper, board games or video games, I really like things with rules and systems that I can explore, optimize, exploit and strategize with. A particular game I'd like to mention is known as 'mau', look it up it's great!</p>
            <p className="aboutme">At last we come to puzzles, some are simple such as a jigsaw style puzzle, others work in more dimensions such as a Rubik's cube or wooden puzzles. Others still involve logic and pattern recognition, like sudoku. I guess there's some overlap here with games isn't there? Such interests are probably why I'm so interested in tech and coding, as there's a simple logic with technology: it does what it's told to do, barring cosmic ray bitflips. This can both be infuriating and gratifying, so too are puzzles.</p>
            <p className="aboutme">Having grown up exposed to and utilizing technology, I consider myself pretty decently techically literate. From a young age I've always been messing around with things technical, trying to learn how things work. I've learned a lot in my life, and if there's a particular theme I'd say it's continually being humbled. No matter how much I learn, there's always more, and expanding my knowledge includes the knowledge of how much I don't know. You'll never know how deep the rabbit hole goes if you don't even know about the rabbit hole, and the deeper you go, the more it seems to fork off in unexpected directions.</p>
        </div>
    );
};

export default About;