import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/Contact.css";
import Swal from "sweetalert2";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hibzs9r",
        "template_ik8c1fi",
        form.current,
        "cvnvMvad3_pdZxpHj"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("Sent!", "Email sent successfully", "success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact_page">
      <h5>Contact Us</h5>
      <br />
      <form ref={form} onSubmit={sendEmail}>
        <h6>Name</h6>

        <input type="text" name="user_name" className="input_field" />
        <br />
        <h6>Email</h6>
        <input type="email" name="user_email" className="input_field" />
        <br />
        <h6>Phone No.</h6>
        <input type="number" name="user_number" className="input_field" />
        <br />
        <h6>Message</h6>
        <textarea name="message" className="input_field" />
        <br />
        <input type="submit" value="Send" className="btn-sent" />
      </form>
    </div>
  );
};

export default Contact;
