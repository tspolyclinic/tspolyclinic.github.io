import React from "react";
import "../css/Commitment.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import commitment_image from "../static/Images/asian-young-main-group-hospital-professional_1291-37 1-2.png";

const Commitment = () => {
  return (
    <>
      <div className="p-4">
        <Container fluid>
          <Row>
            <Col className="mt-5">
              <img
                className="commitment_photo"
                src={commitment_image}
                alt=""
                srcset=""
              />
            </Col>
            <Col className="mt-5">
              <h1 className="commitment_lg_coat">
                Our <span style={{ color: " #0D8346" }}> Commitment</span>
              </h1>
              <p className="commitment_text_sm">
                The Company’s name and logo reflects the nature of the company
                and its commitment to serve its clients/patients. In an effort
                to gain the confidence of the clients/patients and expand the
                market, <span> </span>
                <span style={{ color: " black" }}>
                  Treatment Solution Polyclinic
                </span>
                <span> </span> will work out plans and schemes to bring
                preventive care in the forefront. It will educate the
                clients/patients on the importance of timely health checkups to
                diagnose minor ailments and advise treatment immediately. It
                will partner with local council and Insurance Companies and
                Corporate bodies to tap in more clients/patients. It will
                partner with the Specialized doctors and provide quality health
                care.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Commitment;
