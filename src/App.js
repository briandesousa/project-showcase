import React from 'react';
import ProjectList from './ProjectList';

function App() {
  return (
    <div>
        <h1>Project Showcase</h1>
        <ProjectList name="Project 1" description="Description of project 1" url="https://google.com"></ProjectList>
        <ProjectList name="Project 2" description="Description of project 2" url="https://microsoft.com"></ProjectList>
        <ProjectList name="Project 3" description="Description of project 3" url="https://briandesousa.net"></ProjectList>
    </div>
  );
}

export default App;
