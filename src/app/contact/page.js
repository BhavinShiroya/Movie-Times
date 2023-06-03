import React from "react";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import styles from "./contact.module.css";

const contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>contact</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We'd love to hear<span> from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7437.971728836509!2d72.89555074598461!3d21.232409121873424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f5e3f2bb84d%3A0xf95fa453e0005985!2sSarthana%20Jakat%20Naka%2C%20Nana%20Varachha%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1683899545296!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      ></iframe>
    </>
  );
};

export default contact;
