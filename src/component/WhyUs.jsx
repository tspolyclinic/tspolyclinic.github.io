import React from "react";
import "../css/WhyUs.css";
import logo from "../static/Images/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Group_one from "../static/Images/asian-young-main-group-hospital-professional_1291-37 1-3.png";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PhoneIcon from "@mui/icons-material/Phone";

const WhyUs = () => {
  return (
    <>
      <div className="p-4">
        <Container fluid>
          <Row>
            <Col className="mt-5">
              <img className="why_us_photo" src={Group_one} alt="" />
            </Col>
            <Col className="mt-5">
              <h1 className="multi_lg_coat mb-5">
                Why <span style={{ color: " #0D8346" }}>Us</span> ?
              </h1>
              <p className="multi_text_sm">
                Treatment Solution Polyclinic is a specialized Polyclinic. It
                has latest state of art equipment. The Centre is centrally air
                conditioned and gives you a soothing ambience to brighten up
                your mind. It is run by well trained and patient friendly
                staffs. It is strategically located on Ground Floor near
                Rupkatha Cinema Hall and opposite IndusInd Bank and is
                accessible by all modes of transport.
              </p>
              <p className="multi_text_sm">
                OPEN HOURS : <br /> Mon - Sat : 8:00 AM - 8:00 PM <br /> Sunday
                : 8:00 AM - 2:00 PM <br />
                <h6 className="mt-2">
                  {" "}
                  <ContactPhoneIcon
                    className="me-3"
                    style={{ color: "green" }}
                  />
                  03216 350140
                </h6>
                <h6>
                  {" "}
                  <PhoneIcon className="me-3" style={{ color: "green" }} />
                  9046476855
                </h6>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WhyUs;
