import React from "react";
import "../css/IntroSection.css";
import logo from "../static/Images/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Group_one from "../static/Images/Group 1.png";

const IntroSection = () => {
  return (
    <>
      <div className="intro_section p-4">
        <div className="mb-3">
          <img className="logo_img" src={logo} alt="" srcset="" />
        </div>
        <div>
          <Container fluid>
            <Row className="mt-5">
              <Col lg={6} sm={6} className="mt-5">
                <h1 className="intro_lg_coat">
                  Find great <span style={{ color: " #0D8346" }}>Doctors</span>{" "}
                  who can take your
                  <span style={{ color: " #0D8346" }}> insurance</span>
                </h1>
                <p className="intro_text_sm">
                  We care because we love to serve humanity. It’s not just our
                  duty but a passion to serve you. Serving humanity gives peace
                  to our souls. We feel peace inside when we worked for your
                  health.
                </p>
              </Col>
              <Col lg={6} sm={6}>
                <img className="group_img" src={Group_one} alt="" srcset="" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
