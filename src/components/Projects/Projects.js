import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// On réutilise les images déjà existantes
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong> Récents
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Plateforme RH avec Laravel"
              description="Création d’une plateforme web pour la gestion des offres d’emploi avec Laravel. Authentification, interface responsive et opérations CRUD."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Site E-commerce Laravel"
              description="Développement d’un système de gestion pour location de voitures : génération de rapports PDF, import/export Excel, et base MySQL."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Application Point de Vente"
              description="Solution polyvalente pour magasins : gestion des achats, ventes, caisse et stocks avec suivi en temps réel."
              ghLink="#"
              demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;