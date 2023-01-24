import React from "react";
import "../css/Footer.css";
import logo from "../static/Images/logo.png";
import twitter from "../static/Images/twitter.png";
import instagram from "../static/Images/instagram.png";
import facebook from "../static/Images/facebook.png";
import youtube from "../static/Images/youtube.png";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="divFooter">
          <div className="leftPart">
            <img className="footer_img" src={logo} alt="" srcset="" />
            <h5>Address:</h5>
            <h5 className="footerText">
              Hijalpukuria, besides Rupkatha Cinema Hall and opposite Indusland
              Bank Habra North 24 Parganas West Bengal. 743271
            </h5>
            <h6 className="mt-4">
              {" "}
              <ContactPhoneIcon className="me-3" style={{ color: "green" }} />
              03216 350140
            </h6>
            <h6>
              {" "}
              <PhoneIcon className="me-3" style={{ color: "green" }} />
              9046476855
            </h6>
            <h6>
              <EmailIcon className="me-3" style={{ color: "green" }} />
              tspolyclinic.in@gmail.com
            </h6>

            <h4 className="mt-4">Follow Us on :</h4>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100089848560201&mibextid=ZbWKwL"
                target="_blank"
              >
                <img className="social" src={facebook} alt="" srcset="" />
              </a>

              <a href="" target="_blank">
                <img className="social" src={twitter} alt="" srcset="" />
              </a>
              <a href="https://youtube.com/@treatmentsolution" target="_blank">
                <img className="social" src={youtube} alt="" srcset="" />
              </a>
              <a
                href="https://instagram.com/78.206910?igshid=ZDdkNTZiNTM="
                target="_blank"
              >
                <img className="social" src={instagram} alt="" srcset="" />
              </a>
            </div>
          </div>
          <div className="rightPart mt-5">
            <div>
              <iframe
                className="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.0042302001257!2d88.65371499999999!3d22.839333000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMjLCsDUwJzIxLjYiTiA4OMKwMzknMTMuNCJF!5e0!3m2!1sen!2sin!4v1673893617755!5m2!1sen!2sin"
              />
              <h6>
                Proprietor -
                <span style={{ color: "green" }}>
                  Prithish Kumar Dey / Geetali Dey
                </span>{" "}
              </h6>
              <h6>
                <EmailIcon className="me-3" style={{ color: "green" }} />
                prithish.tsp@gmail.com
              </h6>

              <h6>
                <EmailIcon className="me-3" style={{ color: "green" }} />
                geetali.tsp@gmail.com
              </h6>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h6>
            Language: en | Copyright © 2023, Treatment Solution. All rights
            reserved.
          </h6>
        </div>
        <div
          className="mt-2 mb-2"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p style={{ width: "30vw" }}>
            Developed by -{" "}
            <a
              href="https://in.linkedin.com/in/sayaib-sarkar-847b3b169"
              target="_blank"
              style={{ color: "green" }}
            >
              Sayaib Sarkar
            </a>
          </p>
          <p style={{ width: "30vw" }}>
            Design by- <span style={{ color: "green" }}>Hetal Ganatra</span>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

//03216 350140
//9046476855
