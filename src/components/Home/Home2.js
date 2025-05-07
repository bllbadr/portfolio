import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laisse-moi me <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je suis passionné par le <b className="purple">développement web</b> et la 
              <b className="purple"> conception de logiciels</b>.
              <br />
              <br />Je maîtrise des langages comme
              <i>
                <b className="purple"> Python, PHP, Java, C/C++</b>
              </i>
              <br />
              <br />
              Mon domaine d’intérêt est le développement de{" "}
              <i>
                <b className="purple">solutions web full-stack</b>, la gestion de projets digitaux
              </i>{" "}
              et la création de{" "}
              <b className="purple">systèmes efficaces pour les entreprises</b>.
              <br />
              <br />
              J’ai développé des projets en utilisant{" "}
              <b className="purple">Laravel</b> et 
              <i>
                <b className="purple"> React.js</b>
              </i>
              , ainsi que des bases de données comme{" "}
              <i>
                <b className="purple">MySQL et PostgreSQL</b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Retrouve-moi sur</h1>
            <p>
              N'hésite pas à <span className="purple">me contacter</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/badreddineboulouiz"  // Ton vrai lien GitHub
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ton_pseudo"  // Remplacer si tu as un compte Twitter
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/badreddineboulouiz/"  // Ton LinkedIn réel
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ton_pseudo"  // Remplacer si tu veux
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
