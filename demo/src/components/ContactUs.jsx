// ContactUs.js
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    // Here you would typically handle form submission to a backend
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <div style={styles.row}>
        <div style={styles.column}>
          <h2 style={styles.sectionTitle}>Get in Touch</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            ></textarea>
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </div>
        <div style={styles.column}>
          <h2 style={styles.sectionTitle}>Contact Details</h2>
          <p style={styles.contactDetail}><strong>Address:</strong> 123 Turf Lane, Sportstown, C</p>
          <p style={styles.contactDetail}><strong>Phone:</strong> +91 9585698547</p>
          <p style={styles.contactDetail}><strong>Email:</strong> turfbay@turfbooker.com</p>
          <h2 style={styles.sectionTitle}>Find Us</h2>
          <div style={styles.mapContainer}>

            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314409.54221268616!2d76.9152648205382!3d11.016844935956348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857f6b918d217%3A0x8c3a8a34d118b0b!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1616588047306!5m2!1sen!2sin"
              style={styles.map}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  column: {
    flex: '1',
    margin: '10px',
  },
  sectionTitle: {
    fontSize: '1.8em',
    color: '#333',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '150px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  contactDetail: {
    marginBottom: '10px',
    fontSize: '1.1em',
  },
  mapContainer: {
    marginTop: '20px',
  },
  map: {
    width: '100%',
    height: '400px',
    border: 'none',
  },
};

export default ContactUs;
