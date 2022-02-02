import React from "react";
import "./Contact.css";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <div>
      <form>
        <h2 className="contactMe">CONTACT ME</h2>
        <div className="containerForm">
          <div>
            <label htmlFor="firstName" className="firstName">
              <input type="texte" id="firstName" placeholder="Name" />
            </label>
          </div>

          <div>
            <label htmlFor="email" className="email">
              <input type="email" id="email" placeholder="Email address" />
            </label>
          </div>

          <div>
            <label htmlFor="message" className="message">
              <textarea type="message" id="message" placeholder="Message" />
            </label>
          </div>

          <Button title="Send" more="Thank You!" />
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
