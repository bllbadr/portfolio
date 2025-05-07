import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <CgCPlusPlus size={40} />
        <p>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <DiJavascript1 size={40} />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <TbBrandGolang size={40} />
        <p>Go</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <DiNodejs size={40} />
        <p>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <DiReact size={40} />
        <p>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiSolidity size={40} />
        <p>Solidity</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <DiMongodb size={40} />
        <p>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiNextdotjs size={40} />
        <p>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <DiGit size={40} />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiFirebase size={40} />
        <p>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiRedis size={40} />
        <p>Redis</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiPostgresql size={40} />
        <p>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <DiPython size={40} />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <DiJava size={40} />
        <p>Java</p>
      </Col>
    </Row>
  );
}

export default Techstack;
