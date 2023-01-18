import React from "react";
import "../css/GuidingPrinciples.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import guiding_photo from "../static/Images/asian-young-main-group-hospital-professional_1291-37 1-1.png";

const GudingPrinciples = () => {
  return (
    <>
      <div className="p-4">
        <Container fluid>
          <Row>
            <Col className="mt-5">
              <img className="guiding_photo" src={guiding_photo} alt="" />
            </Col>
            <Col className="mt-5">
              <h1 className="guiding_lg_coat">Guiding Principles</h1>
              <p className="guiding_text_sm">
                There are 5 guiding principles governing how all relationships
                within the organization and with its stakeholders (patients,
                doctors, suppliers, bankers, etc.) should be approached:
              </p>
              <ul className="list">
                <li className="guiding_text_sm">
                  Trust: Mutual and unconditional trust are important in the
                  development and maintenance of relationships, be it business
                  or personal.
                </li>
                <li className="guiding_text_sm">
                  Transparency: Decisions are to be made without any hidden
                  agenda. The why’s of any actions should always readily be
                  available for concerned parties to see.
                </li>
                <li className="guiding_text_sm">
                  Mutual Respect: It is important to respect the individual for
                  what he/she is and not to have prejudices of any type towards
                  anyone.
                </li>
                <li className="guiding_text_sm">
                  Win / Win: Dealings within relationships ought to be
                  approached from a position of considering the optimal outcome
                  for both parties.
                </li>
                <li className="guiding_text_sm">
                  Long Term Commitment: For any effective relationships to be
                  built, it requires time.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default GudingPrinciples;
