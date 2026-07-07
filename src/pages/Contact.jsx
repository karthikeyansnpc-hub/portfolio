import "./Contact.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ksrcips",      // Your Service ID
        "template_3hmpab9",     // Your Template ID
        form.current,
        "NQhhbcGtDKqXP38qG"      // Your Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-box"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1>Contact Me</h1>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;