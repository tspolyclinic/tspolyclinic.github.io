import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/MultispecalityCare.css";
import img_photo from "../static/Images/imagesd.jpeg";
import "../css/ValuesVisionMission.css";

const ValuesVisionMission = () => {
  return (
    <>
      <div className="p-4">
        <Container fluid>
          <Row>
            <Col className="mt-5">
              <h1 className="vision_lg_coat">
                Our <span style={{ color: " #0D8346" }}>Values</span>{" "}
              </h1>
              <p className="multi_text_sm">
                Treatment Solution Polyclinic First treat all Patients,
                Visitor’s and one another with compassion and respect, work as a
                team to provide quality care and services to patients and
                contribute to ongoing improvement and excellence we do.
              </p>
              <h1 className="vision_lg_coat">
                Our <span style={{ color: " #0D8346" }}>Vision</span>
              </h1>
              <p className="multi_text_sm">
                To Promote the health of our patients with personalized care.
              </p>
              <h1 className="vision_lg_coat">
                Our <span style={{ color: " #0D8346" }}>Mission</span>
              </h1>
              <p className="multi_text_sm">
                The best Place to receive care. The best place to provide care
              </p>
            </Col>
            <Col className="mt-5">
              <img className="vision_photo mt-5" src={img_photo} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ValuesVisionMission;
