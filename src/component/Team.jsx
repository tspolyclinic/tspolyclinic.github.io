import React from "react";
import Box from "../Card/Box";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Team = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <Box data="Cardiology" />
            </Col>
            <Col>
              <Box data="Physician" />
            </Col>
            <Col>
              <Box data="Chest medicine" />
            </Col>
            <Col>
              <Box data="Orthopedics" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Box data="Urology" />
            </Col>
            <Col>
              <Box data="Neuro Medicine" />
            </Col>
            <Col>
              <Box data="Neurosurgery" />
            </Col>
            <Col>
              <Box data="Gynecology & Obs" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Box data="ENT  " />
            </Col>
            <Col>
              <Box data="Nephology" />
            </Col>
            <Col>
              <Box data="Dermatology" />
            </Col>
            <Col>
              <Box data="Diabetes" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Box data="Thyroid  " />
            </Col>
            <Col>
              <Box data="Endocrinology" />
            </Col>
            <Col>
              <Box data="Dietitian" />
            </Col>
            <Col>
              {/* <Box data="Diabetes, Thyroid and Endocrinology" /> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Team;
