import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut tout le monde, je suis <span className="purple">Badreddine Boulouiz</span>
            de <span className="purple">Berrechid, Maroc.</span>
            <br />
            Je suis actuellement développeur Full-stack passionné par le développement
            web et la conception de logiciels.
            <br />
            J'ai un parcours en Génie Mécanique et Électrique, mais j'ai rapidement
            découvert ma passion pour le développement logiciel, ce qui m'a conduit à
            travailler sur divers projets web et à me former continuellement sur de
            nouvelles technologies.
            <br />
            <br />
            En dehors du codage, voici quelques-unes de mes activités préférées :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Apprendre de nouvelles technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Résoudre des défis de programmation
            </li>
            <li className="about-activity">
              <ImPointRight /> Lire des livres techniques et explorer l'IA
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Construire des solutions simples et efficaces pour de vrais problèmes."{" "}
          </p>
          <footer className="blockquote-footer">Badreddine Boulouiz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
