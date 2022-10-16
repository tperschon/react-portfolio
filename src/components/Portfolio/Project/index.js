import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe }  from '@fortawesome/free-solid-svg-icons';

function Project(props) {
    // set up a state for the whole item to use for child element class names
    const [itemState, setItemState] = useState('hidden');
    // functions to hide/unhide child elements on hovering
    const mouseEnter = (event) => setItemState('');
    const mouseLeave = (event) => setItemState('hidden');
    // styles for items
    const itemStyle = { backgroundImage: `url('${props.item.image}')`, display: 'flex', justifyContent: 'space-around', alignItems: 'center'};
    const linkStyle = { width: '100px', height: '100px', color: 'lightblue', backgroundColor: 'black', borderRadius: '50%'};
    const nameStyle = { fontSize: '24px', color: 'lightblue', backgroundColor: 'black', borderRadius: '24px', padding: '0px 10px', position: 'absolute', top: '20px'}
    return (
        <div className="portfolio-item" style={itemStyle} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <h2 className={itemState} style={nameStyle}>{props.item.name}</h2>
            <a name="url" className={itemState} href={props.item.url}><FontAwesomeIcon icon={faGlobe} style={linkStyle}/></a>
            <a name="repo" className={itemState} href={props.item.repo}><FontAwesomeIcon icon={faGithub} style={linkStyle}/></a>
        </div>
    );
};

export default Project;