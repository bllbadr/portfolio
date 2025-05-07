import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Assurez-vous que le fichier PDF est au bon chemin
import pdf from "../../Assets/Badrcv.pdf"; 

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth); // Initialiser la largeur avec window.innerWidth

  useEffect(() => {
    // Mettre à jour la largeur lors du redimensionnement de la fenêtre
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fonction pour télécharger le CV uniquement lors du clic
  const handleDownload = () => {
    const link = document.createElement("a");  // Créer un élément <a> 
    link.href = pdf;                           // Lien vers le fichier PDF
    link.setAttribute("download", "Badrcv.pdf");  // Définir explicitement le nom du fichier
    link.click();                              // Simuler un clic sur le lien pour initier le téléchargement
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Section du bouton pour télécharger le CV */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button
            variant="primary"
            onClick={handleDownload}  // Téléchargement seulement lors du clic
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Section d'affichage du CV en PDF */}
        <Row className="resume" style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
