import React from 'react';
import './Project.css';

function Project(props) {

    return (
        <div className="project">
            <div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p><a target="_blank" rel="noopener noreferrer" href={props.url}>{props.url}</a></p>
            </div>
        </div>
    )
};

export default Project;