import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/MultispecalityCare.css";
import multi_photo from "../static/Images/portrait-successful-mid-adult-doctor-with-crossed-arms_1262-12865 1-2.png";

const MultispecalityCare = () => {
  return (
    <>
      <div className="p-4">
        <Container fluid>
          <Row>
            <Col className="mt-5">
              <img className="multi_photo" src={multi_photo} alt="" />
            </Col>
            <Col className="mt-5">
              <h1 className="multi_lg_coat mb-5">
                A <span style={{ color: " #0D8346" }}>SINGLE</span> DOORWAY{" "}
                <span style={{ color: " #0D8346" }}>TO </span>
                MULTISPECIALITY <span style={{ color: " #0D8346" }}> CARE</span>
              </h1>
              <p className="multi_text_sm">
                Treatment Solution Polyclinic is focused on one mission –
                Promoting the health of our patients through professional &
                Personal Care. We’re able to deliver on this because of our
                highly specialized & renowned doctors in charge And that gives
                them the power to put patients first.
              </p>
              <p className="multi_text_sm">
                Because of this we’ve attracted more than 200 of the area’s most
                respected physicians & Advanced doctors.
              </p>
              <p className="multi_text_sm">
                We have a Specialized Panel of doctors & Surgeons so we offer a
                doorway to meeting your health care needs. Our Care teams work
                closely together with one goal in mind – doing right for you.
              </p>
              <p className="multi_text_sm">
                On site Services at several locations, including lab test and
                wide range of imaging services. Medical information anytime and
                helps you better meet your family’s health needs
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MultispecalityCare;
