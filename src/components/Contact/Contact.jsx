import React, { useState } from "react";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./Contact.css";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/api/contact/html`, { firstName, email, message })
      .then((res) => {
        if (res.status === 200) {
          console.log("alerte")
          alert("Merci");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div>
      <form>
        <h2 className="contactMe">CONTACT ME</h2>
        <div className="containerForm">
          <div>
            <label htmlFor="firstName" className="firstName">
              <input
                type="texte"
                id="firstName"
                placeholder="Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label htmlFor="email" className="email">
              <input
                type="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label htmlFor="message" className="message">
              <textarea
                type="message"
                id="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>

          <Button title="Send" more="Thank You!" onClick={handleSubmit} />
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
