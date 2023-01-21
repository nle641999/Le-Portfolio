import React, { Component } from 'react';
import resume from '../../Assets/resume.pdf';

class ResumePage extends Component {
  render() {
    return (
      <div>
        <h1>My Resume</h1>
        <iframe src={resume} title="My Resume"></iframe>
        <a href={resume} download>
          <button>Download</button>
        </a>
      </div>
    );
  }
}

export default ResumePage;
