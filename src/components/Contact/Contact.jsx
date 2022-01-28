import React from "react";
import "./Contact.css";
import Button from "../Button/Button"
import Footer from "../Footer/Footer";

function Contact() {
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
                // value={firstName}
                // onChange={handleFirstNameChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="email" className="email">
              <input
                type="email"
                id="email"
                placeholder="Email address"
                // value={email}
                // onChange={handleEmailChange}
                // required
              />
            </label>
          </div>
          <label htmlFor="message" className="message">
            <textarea
              type="message"
              id="message"
              placeholder="Message"
              // value={message}
              // onChange={handleMessageChange}
            />
          </label>
          <Button/>
        </div>
      </form>
      <Footer/>
    </div>
  );
}

export default Contact;
