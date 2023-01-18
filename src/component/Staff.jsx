import React from "react";
import "../css/Staff.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import staff_photo from "../static/Images/staff.jpg";

const Staff = () => {
  return (
    <>
      <div className="p-4">
        <Container fluid>
          <Row>
            <Col className="mt-5">
              <h1 className="staff_lg_coat">Staff</h1>
              <p className="staff_text_sm">
                Friendly & Experienced staff form the heart of our Centre. They
                provide quality services and understand the needs of
                Clients/Patients. Qualified Technician (Male/Female) with good
                experience undergone necessary Training conducts the
                investigations.
              </p>
            </Col>
            <Col className="mt-5">
              <img className="staff_photo" src={staff_photo} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Staff;
