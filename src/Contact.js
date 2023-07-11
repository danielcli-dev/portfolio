import React, { useState } from "react";
import "./Contact.css";
import { db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
  };

  return (
    <div className="contact__container">
      <div className="contact">
        <div className="contact__area">
          <form className="contact__box">
            <div className="contact__label">NAME</div>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
            />
            <div className="contact__label">COMPANY</div>

            <input
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              type="text"
            />
            <div className="contact__label">E-MAIL</div>

            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
            />
            <div className="contact__label">MESSAGE</div>

            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              type="text"
            />
            <button className="submitButton" onClick={sendMessage}>
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
