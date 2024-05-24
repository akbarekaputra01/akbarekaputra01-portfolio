import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="myOrange">Akbar Eka Putra </span>
            from <span className="myOrange"> Bekasi, Indonesia.</span>
            {/* <br />
            As a student at BINUS University majoring in computer science, */}
            <br />
            I really fell in love with programming and robotic.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Robot
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(254, 173, 30)" }}>"Dare to be different" </p>
          <footer className="blockquote-footer">akbarekaputra01</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
