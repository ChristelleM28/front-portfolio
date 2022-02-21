import React, { useState } from "react";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./Contact.css";

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function Contact() {
  const [newMessage, setNewMessage] = useState({
    firstName:"",
    email:"",
    message:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.firstName || !newMessage.email || !newMessage.message) {
      alert("You must provide all fields");

    } else {
      axios
        .post(`${API_URL}/api/contact/html`, newMessage )
        .then((res) => {
          if (res.status === 200) {
            alert("Thank You!");
            setNewMessage("");
          } else {
            console.log(res);
          }
        })
        .catch((err) => console.error(err.message));
    }
  };

  return (
    <div>
      <form className="contactMeForm">
        <h2 className="contactMe">CONTACT ME</h2>
        <div className="containerForm">
          <div>
            <label htmlFor="firstName" className="firstName">
              <input
                className="contactInput"
                type="texte"
                id="firstName"
                placeholder="Name"
                value={newMessage.firstName}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label htmlFor="email" className="email">
              <input
                className="contactInput"
                type="email"
                id="email"
                placeholder="Email address"
                value={newMessage.email}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label htmlFor="message" className="message">
              <textarea
                className="textAreaContact"
                type="message"
                id="message"
                placeholder="Message"
                value={newMessage.message}
                onChange={(e) => setNewMessage(e.target.value)}
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
