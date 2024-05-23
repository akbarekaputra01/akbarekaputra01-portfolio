import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePicture from "../../Assets/images/profilePicture.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="myOrange"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="myOrange">Web and Mobile Developer</b> whose
              hobby is robotic 🤖
              <br />
              <br />
              I'm fluent in
              <i>
                <b className="myOrange"> JavaScript, PHP, and C language </b>
              </i>
              💻🌐
              <br />
              <br />
              My fields of interest are &nbsp;
              <i>
                <b className="myOrange">Cross-Platform and Blockchain</b>, also
                in areas related to <b className="myOrange">Robotic</b>.
              </i>
              <br />
              <br />I like learning new things because one of the principles
              that I like is{" "}
              <i>
                <b className="myOrange">Plenus venter non studet libenter</b>,
                which means{" "}
                <b className="myOrange">A full belly does not like studying</b>.
              </i>
              <br />
              <br />
              Explore more{" "}
              <b>
                <a
                  href="../About/"
                  className="myOrange"
                  style={{ textDecoration: "none" }}
                >
                  About Me
                </a>{" "}
              </b>
              and{" "}
              <b>
                <a
                  href="../Projects/"
                  className="myOrange"
                  style={{ textDecoration: "none" }}
                >
                  My Projects
                </a>
              </b>
              .
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={profilePicture}
                className="img-fluid"
                alt="profilePicture"
                width={"75%"}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="myOrange">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/akbarekaputra01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akbar-eka-putra-82a468243/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/akbarekaputra01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
