import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rabkagptImg from "../../Assets/Projects/rabkagpt.png";
import rabkaMovieImg from "../../Assets/Projects/rabkaMovie.png";
import rabkaAnimelistImg from "../../Assets/Projects/rabkaAnimelist.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rabkagptImg}
              isBlog={false}
              title="RabkaGPT"
              description="RabkaGPT is a React Native based application that allows users to interact with an AI chatbot that can send and receive voice or text messages, as well as generate images."
              ghLink="https://github.com/akbarekaputra01/rabkagpt_react_native_cli"
              appLink="https://github.com/akbarekaputra01/rabkagpt_react_native_cli/releases"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rabkaMovieImg}
              isBlog={false}
              title="Rabka Movie"
              description="Rabka Movie is an application that displays a list of movies fetched from The Movie Database (TMDB) API and is integrated with Firebase for additional features such as user authentication, liking movies, and supporting both dark mode and light mode."
              ghLink="https://github.com/akbarekaputra01/rabka_movie_flutter"
              appLink="https://github.com/akbarekaputra01/rabka_movie_flutter/releases"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rabkaAnimelistImg}
              isBlog={false}
              title="Rabka Anime List"
              description="Rabka Anime List is an application that makes it easy for users to view anime lists from the Jikan API which is integrated with Firebase, as well as an attractive interface, and user can login."
              ghLink="https://github.com/akbarekaputra01/animelist_flutter"
              // appLink="https://github.com/akbarekaputra01/animelist_flutter/releases"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
