import React from "react";
import "../css/AboutUs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about_photo from "../static/Images/asian-young-main-group-hospital-professional_1291-37 1.png";

const AboutUs = () => {
  return (
    <>
      <div className="p-4">
        <Container fluid>
          <Row>
            <Col className="mt-5">
              <img className="about_photo" src={about_photo} alt="" />
            </Col>
            <Col className="mt-5">
              <h1 className="about_lg_coat mb-5">
                About <span style={{ color: " #0D8346" }}> Us</span>
              </h1>
              <p className="about_text_sm">
                <span style={{ color: "black" }}>
                  Treatment Solution polyclinic
                </span>{" "}
                is most updated Specialized Polyclinic centrally air conditioned
                and gives you a soothing ambiance to brighten up your mind. It
                is run by well trained and patient friendly staffs. It is
                strategically located on
                <span style={{ color: "black" }}>
                  {" "}
                  Hijalpukuria, besides Rupkatha Cinema Hall
                </span>{" "}
                and opposite{" "}
                <span style={{ color: "black" }}>
                  {" "}
                  Indusland Bank Habra North 24 Parganas West Bengal.
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
