import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-header">
        <h1>CONTACT ME</h1>
        <h2>SAY HELLO TO ME</h2>
      </section>

      <section className="contact-form">
        <h3>Contact me</h3>
        <form>
          <div className="form-group">
            <input type="text" id="name" placeholder="Your Name" required />
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea id="message" placeholder="Write a message..." required />
          </div>
          <button type="submit" className="send-button">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
