import React from "react";
import "../css/Management.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import management_photo from "../static/Images/portrait-successful-mid-adult-doctor-with-crossed-arms_1262-12865 1.png";

const Management = () => {
  return (
    <>
      <div className="p-4">
        <Container fluid>
          <Row>
            <Col className="mt-5">
              <h1 className="management_lg_coat">Management</h1>
              <p className="management_text_sm">
                Treatment Solution polyclinic is formed by a team of like mind
                entrepreneurs who share a common vision of contributing in the
                Health Sector thereby impacting lives of common man. The Company
                is owned by an NRI.
              </p>
              <p className="management_text_sm">
                He has so many experience on Health care business of high repute
                with over 20 years’ experience in Management and entrepreneur
                skills
              </p>
              <p className="management_text_sm">
                Our doctors have the power to put the First. Treatment Solution
                Polyclinic work with a single mission for improving lives of our
                clients/patients by ensuring safe and sound health.
              </p>
            </Col>
            <Col className="mt-5">
              <img className="management_photo" src={management_photo} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Management;
