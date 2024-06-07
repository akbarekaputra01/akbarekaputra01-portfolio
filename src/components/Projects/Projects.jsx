import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rabkagptImg from "../../Assets/Projects/rabkagpt.png";
import rabkaMovieImg from "../../Assets/Projects/rabkaMovie.png";
import rabkaAnimelistAppImg from "../../Assets/Projects/rabkaAnimelistApp.png";
import rabkaAnimelistWebImg from "../../Assets/Projects/rabkaAnimelistWeb.png";
import smartAdminWebImg from "../../Assets/Projects/smartAdmin.png";
import weatherAppSwiftUIImg from "../../Assets/Projects/weatherAppSwiftUI.png";
import appetizerAppSwiftUIImg from "../../Assets/Projects/appetizerAppSwiftUI.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="myOrange">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rabkagptImg}
              isBlog={false}
              title="RabkaGPT (Mobile)"
              description="RabkaGPT is a React Native based application that allows users to interact with an AI chatbot that can send and receive voice or text messages, as well as generate images."
              ghLink="https://github.com/akbarekaputra01/rabkagpt_react_native_cli"
              appLink="https://github.com/akbarekaputra01/rabkagpt_react_native_cli/releases"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rabkaMovieImg}
              isBlog={false}
              title="Rabka Movie (Mobile)"
              description="Rabka Movie is an application that displays a list of movies fetched from The Movie Database (TMDB) API and is integrated with Firebase for additional features such as user authentication, liking movies, and supporting both dark mode and light mode."
              ghLink="https://github.com/akbarekaputra01/rabka_movie_flutter"
              appLink="https://github.com/akbarekaputra01/rabka_movie_flutter/releases"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rabkaAnimelistAppImg}
              isBlog={false}
              title="Rabka Anime List (Mobile)"
              description="Rabka Anime List is an application that makes it easy for users to view anime lists from the Jikan API which is integrated with Firebase, as well as an attractive interface, and user can login."
              ghLink="https://github.com/akbarekaputra01/animelist_flutter"
              appLink="https://github.com/akbarekaputra01/animelist_flutter/releases"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appetizerAppSwiftUIImg}
              isBlog={false}
              title="Appetizer App (Mobile)"
              description="The Appetizer App is an online order application designed to provide users with a seamless experience for browsing appetizer lists, placing orders, viewing order details, and managing their account."
              ghLink="https://github.com/akbarekaputra01/Appetizers-SwiftUI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherAppSwiftUIImg}
              isBlog={false}
              title="Weather App (Mobile)"
              description="WeatherApp-SwiftUI is a simple weather app built using the SwiftUI framework and integrated with the API. This app allows users to monitor current weather conditions and forecast future weather at their location."
              ghLink="https://github.com/akbarekaputra01/WeatherApp-SwiftUI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartAdminWebImg}
              isBlog={false}
              title="Smart Admin (Web)"
              description="Smart Admin is a website integrated with IoT for card scanning. This site provides customer data management, transaction data and card scanner features. Admins can create, read, update and delete making data management efficient and effective."
              ghLink="https://github.com/akbarekaputra01/smart-admin-php-mysql-rfid"
              demoLink="http://rplstoresmkn5kotabekasi.000webhostapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rabkaAnimelistWebImg}
              isBlog={false}
              title="Rabka Anime List (Web)"
              description="Rabka Anime List is a Next.js based website that allows users to manage their favorite anime lists. Equipped with a GitHub login feature and uses PostgreSQL with Prisma. Users can provide ratings and reviews of anime."
              ghLink="https://github.com/akbarekaputra01/rabkaanimelist"
              demoLink="https://rabkaanimelist.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
