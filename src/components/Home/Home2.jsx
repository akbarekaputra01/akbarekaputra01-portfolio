import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/images/profilePicture.png";
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a web and mobile developer whose hobby is robotic 🤖
              <br />
              <br />
              I'm fluent in
              <i>
                <b className="purple"> JavaScript, PHP, and C language </b>
              </i>
              💻🌐
              <br />
              <br />
              My fields of interest are &nbsp;
              <i>
                <b className="purple">Cross-Platform and Blockchain</b>, also in
                areas related to <b className="purple">Robotic.</b>
              </i>
              <br />
              <br />I like learning new things because one of the principles
              that I like is{" "}
              <i>
                <b className="purple">Plenus venter non studet libenter</b>,
                which means{" "}
                <b className="purple">A full belly does not like studying</b>.
              </i>
              <br />
              <br />
              Explore more{" "}
              <a
                href="../About/"
                className="purple"
                style={{ textDecoration: "none" }}
              >
                About Me
              </a>{" "}
              and{" "}
              <a
                href="../Projects/"
                className="purple"
                style={{ textDecoration: "none" }}
              >
                My Projects
              </a>
              .
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
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
              Feel free to <span className="purple">connect </span>with me
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
