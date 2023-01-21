import React, { Component } from 'react';

class ProjectsPage extends Component {
  state = {
    projects: [
      {
        title: 'Project 1',
        url: 'https://project1.com',
        thumbnail: 'https://project1.com/thumbnail.jpg'
      },
      {
        title: 'Project 2',
        url: 'https://project2.com',
        thumbnail: 'https://project2.com/thumbnail.jpg'
      },
      {
        title: 'Project 3',
        url: 'https://project3.com',
        thumbnail: 'https://project3.com/thumbnail.jpg'
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>My Projects</h1>
        <div className="projects-grid">
          {this.state.projects.map((project) => (
            <a href={project.url} target="_blank" key={project.title}>
              <img src={project.thumbnail} alt={project.title} />
              <h2>{project.title}</h2>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
