import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import blogapp from "../../Assets/Projects/blogapp.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/priyanshu0088/ChatApp.git"
              demoLink="https://chatapp-57gk.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Placement Portal"
              description="College Placement Portal is a web application with three dashboards for Admin, Students, and Companies. It simplifies the campus recruitment process by enabling student registrations, job postings, application tracking, and interview management—all in one platform."
              ghLink="https://github.com/priyanshu0088/placement_portal"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogapp}
              isBlog={false}
              title="BlogVerse"
              description="BlogVerse is a simple and user-friendly blog writing platform built using React and Firebase. It allows users to write, save, and share their thoughts in real-time. With Firebase handling the backend, authentication, and data storage, users can securely log in and manage their personal blogs effortlessly. The clean interface makes writing enjoyable, while the live sync ensures all updates are instantly saved."
              ghLink="https://github.com/priyanshu0088/react-vlog.git"
              demoLink="https://auth-blog-5bf33.web.app/"              
            />
          </Col>

                </Row>
      </Container>
    </Container>
  );
}

export default Projects;
