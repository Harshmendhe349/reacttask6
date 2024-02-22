import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiKalilinux,
  SiFirebase,
  SiNextdotjs,
  SiGooglecloud,
  SiPostgresql,
} from "react-icons/si";
import { FaJava, FaReact,FaBootstrap,FaStripe,FaPhp} from "react-icons/fa";
import "./Techstack.css"; 

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
        <p>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
        <p>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
        <p>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaPhp />
        <p>PHP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
        <p>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaStripe />
        <p>Stripe</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud/>
        <p>Google Cloud</p>
      </Col>
    </Row>
  );
}

export default Techstack;
