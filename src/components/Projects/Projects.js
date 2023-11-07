import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              isBlog={false}
              title="Pizza Delivery Application"
              description="This web app allows customers to browse the menu,customize their orders.Makes online payment.Tech Stack:React js, Node js,Mongodb, Express js."
              ghLink="https://github.com/AbiyaElangovan/pizza-delivery-app-client"
              demoLink="https://papaya-melomakarona-19a0b8.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Pinterest clone"
              description="This web application is used to create boards,pins and idea pins.Allows users to search for and save pins to their boards.Tech Stack: React js,Node js,Mongodb,Express js."
              ghLink="https://github.com/AbiyaElangovan/pinterest-clone-frontend"
              demoLink="https://charming-medovik-e79ebd.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
