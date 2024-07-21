import React from "react";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="separator"></div>
      <h2 className="section_title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Email me</span>
                <h4 className="info__desc">jhetdizon41@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+639629240211</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.linkedin.com/in/jhet-andrei-dizon-0ba0782a2/"
              className="contact__social-link"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/schrodinger41"
              className="contact__social-link"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/jiiiitt"
              className="contact__social-link"
              target="_blank"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/jhiiiitt/"
              className="contact__social-link"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact__form"
        >
          <input
            type="hidden"
            name="access_key"
            value="b7dae896-c9f8-4d85-9921-5cad393fa03a"
          />

          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                name="subject"
                placeholder="Message Subject"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Message"
              name="message"
              className="form__control textarea"
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
