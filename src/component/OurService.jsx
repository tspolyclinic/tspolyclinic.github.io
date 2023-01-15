import React from "react";
import Card from "../Card/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/OurService.css";

//Images

import Cardiology from "../static/Images/Rectangle 84.png";
import CardiacSurgery from "../static/Images/Rectangle 84-1.png";
import Neurology from "../static/Images/Rectangle 84-2.png";
import Neurosurgery from "../static/Images/Rectangle 84-3.png";
import Psychiatrist from "../static/Images/Rectangle 84-4.png";
import Gastroenterology from "../static/Images/Rectangle 84-5.png";
import Gynecology from "../static/Images/Rectangle 84-6.png";
import Nephrology from "../static/Images/Rectangle 84-7.png";
import Urology from "../static/Images/Rectangle 84-8.png";
import ChestMedicine from "../static/Images/Rectangle 84-9.png";
import GeneralSurgery from "../static/Images/Rectangle 84-10.png";
import Orthopedics from "../static/Images/Rectangle 84-11.png";
import GeneralMedicine from "../static/Images/Rectangle 84-12.png";
import EndocrinologyDiabetology from "../static/Images/Rectangle 84-13.png";
import Dermatology from "../static/Images/Rectangle 84-14.png";
import ENT from "../static/Images/Rectangle 84-15.png";
import available from "../static/Images/Rectangle 84-16.png";

const OurService = () => {
  return (
    <>
      <div className="services mt-5">
        <div>
          <h1 className="services_lg_coat">
            Our <span style={{ color: " #0D8346" }}>Services</span>
          </h1>
        </div>
        <div className="containerBackground">
          <Container>
            <Row>
              <Col>
                <Card
                  description="24x7 available online
(virtually)"
                  image={available}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={3} sm={3}>
                <Card description="Cardiology" image={Cardiology} />
              </Col>

              <Col lg={3} sm={3}>
                <Card description="Cardiac Surgery" image={CardiacSurgery} />
              </Col>

              <Col lg={3} sm={3}>
                <Card description="Neurology" image={Neurology} />
              </Col>

              <Col lg={3} sm={3}>
                <Card description="Neurosurgery" image={Neurosurgery} />
              </Col>
            </Row>
            <Row>
              <Col lg={3} sm={3}>
                <Card description="Psychiatrist" image={Psychiatrist} />
              </Col>

              <Col lg={3} sm={3}>
                <Card description="Gastroenterology" image={Gastroenterology} />
              </Col>

              <Col lg={3} sm={3}>
                <Card description="Gynecology" image={Gynecology} />
              </Col>

              <Col lg={3} sm={3}>
                <Card description="Nephrology" image={Nephrology} />
              </Col>
            </Row>
            <Row>
              <Col lg={3} sm={3}>
                <Card description="Urology" image={Urology} />
              </Col>

              <Col lg={3} sm={3}>
                <Card description="Chest Medicine" image={ChestMedicine} />
              </Col>

              <Col lg={3} sm={3}>
                <Card description="General Surgery" image={GeneralSurgery} />
              </Col>

              <Col lg={3} sm={3}>
                <Card description="Orthopedics" image={Orthopedics} />
              </Col>
            </Row>
            <Row>
              <Col lg={3} sm={3}>
                <Card description="General Medicine" image={GeneralMedicine} />
              </Col>

              <Col lg={3} sm={3}>
                <Card
                  description="Endocrinology and Diabetology"
                  image={EndocrinologyDiabetology}
                />
              </Col>

              <Col lg={3} sm={3}>
                <Card description="Dermatology" image={Dermatology} />
              </Col>

              <Col lg={3} sm={3}>
                <Card description="ENT" image={ENT} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default OurService;
