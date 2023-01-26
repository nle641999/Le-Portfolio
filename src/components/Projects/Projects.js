import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import plan from "../../Assets/Projects/plan.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import burn from "../../Assets/Projects/burn.png";
import tunage from "../../Assets/Projects/tunage.png";
import study from "../../Assets/Projects/study.png";
import weather from "../../Assets/Projects/weather.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent Deployed <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tunage}
              isBlog={false}
              title="Tasty Tunage"
              description="Song sample search engine built on Javascript. Uses SpotifyAPI and GeniusLyricsAPI in order to give the user details about the song, as well as lyrics. The main function of the application also allows users to see which songs the track sample FROM as well as other songs that used that song as a sample!"
              ghLink="https://github.com/nle641999/Tasty-Tunage"
              demoLink="https://nle641999.github.io/Tasty-Tunage/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Dashboard"
              description="An application that allows users to search for a city and see the current weather conditions as well as a 5 day forecast. The application also saves the user's search history and allows them to click on the city name to see the weather conditions again. The application also uses local storage to save the user's search history."
              ghLink="https://github.com/nle641999/Weather-Forecasting-JS"
              demoLink="https://nle641999.github.io/Weather-Forecasting-JS/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={burn}
              isBlog={false}
              title="BurnWhisper"
              description="A web forum that allows users to create a profile and post their thoughts. The application also allows users to comment on other users' posts. Upvoting and single post/comment viewing is still in the works. The application also uses local storage to save the user's profile information."
              ghLink="https://github.com/nle641999/BurnWhisper"
              demoLink="https://boiling-harbor-03856.herokuapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plan}
              isBlog={false}
              title="Plan Your Day"
              description="A simple calendar application that allows the user to save events for each hour of the day. The application also uses local storage to save the user's events. The application also uses moment.js to display the current date and time. The application also uses jQuery to dynamically update the HTML and CSS. The application also uses Bootstrap to style the page. The application also uses Font Awesome to add icons to the page."
              ghLink="https://github.com/nle641999/Plan-Your-Day"
              demoLink="https://nle641999.github.io/Plan-Your-Day/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={study}
              isBlog={false}
              title="Prework Study Guide"
              description="My very FIRST coding project ever. An HTML webpage that displays information about a few different languages inlcuding HTML, CSS, Javascript, as well as Git. I still remember the first week I actually picked up coding and just how difficult it was to even figure out how to deploy a web page. Coming on to a year since starting my coding journey, being able to look back at my first project is nostalgic. I have come a long way since this was made."
              ghLink="https://github.com/nle641999/prework-study-guide"
              demoLink="https://nle641999.github.io/prework-study-guide/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My First Portfolio"
              description="The purpose of this project was to set up a very rough draft of my online portfolio containing deployed coding works and information about my voice acting career. It was fun tinkering with the css style sheet while also being able to appreciate the construction of websites far more due to this project.
              Perhaps the most difficult task in this website was setting up the rows of information containing my deployed works."
              ghLink="https://github.com/nle641999/Nicholas-"
              demoLink='https://nle641999.github.io/Nicholas-/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;