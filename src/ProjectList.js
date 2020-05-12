import React from 'react';
import './ProjectList.css';

function ProjectList(props) {

    return (
        <div className="projectListContainer">
            <div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p><a target="_blank" rel="noopener noreferrer" href={props.url}>{props.url}</a></p>
            </div>
        </div>
    )
};

export default ProjectList;