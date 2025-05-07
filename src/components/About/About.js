import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Qui suis-je ? <strong className="purple">Badreddine Boulouiz</strong>
            </h1>
            <p className="home-about-body">
              Je suis passionné par le développement web, avec une expertise en
              backend (Node.js, Laravel) et frontend (React.js, Bootstrap).
              <br />
              <br />
              J'ai travaillé sur des projets variés, de la gestion de plateformes à des
              applications de gestion de point de vente et des sites de recrutement.
              Mon objectif est d'apporter des solutions logicielles simples et efficaces.
              <br />
              <br />
              Je suis également curieux des nouvelles technologies telles que le
              <i><b className="purple"> blockchain</b></i> et l'IA, et j'aime développer des produits utilisant ces technologies.
            </p>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Mes <strong className="purple">Compétences</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Outils</strong> que j'utilise
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
