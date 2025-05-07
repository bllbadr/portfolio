import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiMacos size={40} />
        <p>macOS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiVisualstudiocode size={40} />
        <p>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiPostman size={40} />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiSlack size={40} />
        <p>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiVercel size={40} />
        <p>Vercel</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
