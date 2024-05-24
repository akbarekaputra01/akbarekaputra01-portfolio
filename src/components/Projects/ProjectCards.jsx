import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsDownload, BsGithub } from "react-icons/bs";
import { Image } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Image
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          borderRadius: "3px",
          margin: "16px",
        }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {props.appLink && (
          <Button
            variant="primary"
            href={props.appLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsDownload /> &nbsp;
            {"App"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
