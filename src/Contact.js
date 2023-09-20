import React, { useState } from "react";
import "./Contact.css";
import { db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import SendIcon from "@mui/icons-material/Send";

function Contact({ active }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const sendMessage = (e) => {
    e.preventDefault();

    addDoc(collection(db, "message"), {
      name: name,
      company: company,
      email: email,
      message: message,
      timestamp: serverTimestamp(),
    });

    setName("");
    setCompany("");
    setEmail("");
    setMessage("");
    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 2000);
  };

  return (
    <div
      className={`contact__container ${active === "contact" && "active"}`}
      id="contact"
    >
      <h1 className="contact__title mobile-only">Contact</h1>

      <div className="contact">
        <div className="contact__area">
          <form className="contact__box">
            <div className="contact__label">name</div>
            <input
              className="contact__input"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
            />
            <div className="contact__label">company</div>

            <input
              className="contact__input"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              type="text"
            />
            <div className="contact__label">e-mail</div>

            <input
              className="contact__input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
            />
            <div className="contact__label">message</div>

            <textarea
              className="contact__input"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              type="text"
            />
            <button className="submitButton" onClick={sendMessage}>
              <SendIcon />
              <div className={`submitButtonConfirmed ${sent ? "active" : ""}`}>
                Message Sent
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
