import React, { useEffect, useState } from 'react';
import Project from './Project';

function ProjectListContainer(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/api/projectlist")
            .then(res => res.json())
            .then(
                result => {
                    setIsLoaded(true);
                    setProjects(result.projects)
                },
                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading projects...</div>;
    } else {
        return (
            <div>
                {projects.map(project => (
                    <Project
                        name={project.name}
                        description={project.description}
                        url={project.url}>
                    </Project>
                ))}
            </div>
        );

    }
}

export default ProjectListContainer;