import React, { useState } from "react";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./Contact.css";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function Contact() {
  const [data, setData] = useState("");
const [firstName, setFirstName] = useState("")
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");


  const handleSubmit = (e) => {
    axios
      .post(`${API_URL}/api/contact/html`, { firstName, email, message }) 
      .then((data) => {
        setData(data);
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
              <input type="texte" id="firstName" placeholder="Name" value="firstName" onChange="a compléter avec state"/>
            </label>
          </div>

          <div>
            <label htmlFor="email" className="email">
              <input type="email" id="email" placeholder="Email address" value="email" onChange=""/>
            </label>
          </div>

          <div>
            <label htmlFor="message" className="message">
              <textarea type="message" id="message" placeholder="Message" value="message" onChange=""/>
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
