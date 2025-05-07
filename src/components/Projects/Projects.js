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
              ghLink="https://github.com/bllbadr"
              demoLink="https://github.com/bllbadr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Une marketplace numérique "
              description="Conception et développement d’une plateforme de vente de produits digitaux (scripts, templates, médias, etc.) avec Laravel, MySQL et Blade. Mise en place d’un système sécurisé de gestion des utilisateurs, des paiements (PayPal, Stripe, Razorpay) et d’un tableau de bord interactif."
              ghLink="https://github.com/bllbadr"
              demoLink="https://github.com/bllbadr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Application Point de Vente"
              description="Solution polyvalente pour magasins : gestion des achats, ventes, caisse et stocks avec suivi en temps réel."
              ghLink="https://github.com/bllbadr"
              demoLink="https://github.com/bllbadr"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;