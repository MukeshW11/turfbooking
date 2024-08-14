// MembershipPage.js
import React from 'react';
import { Link } from 'react-router-dom';
const MembershipPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Membership Plans</h1>
      <div style={styles.membershipContainer}>
        <div style={styles.membershipCard}>
          <h2 style={styles.membershipTitle}>Basic</h2>
          <p style={styles.price}>$9.99/month</p>
          <ul style={styles.benefits}>
            <li>Access to all turfs</li>
            <li>Basic booking support</li>
            <li>Monthly newsletter</li>
          </ul>
          <br></br>
          <Link to ="/login">
          <button style={styles.button}>Join Now</button>
          </Link>
        </div>
        <div style={styles.membershipCard}>
          <h2 style={styles.membershipTitle}>Premium</h2>
          <p style={styles.price}>$19.99/month</p>
          <ul style={styles.benefits}>
            <li>All Basic plan benefits</li>
            <li>Priority booking</li>
            <li>Discounts on events</li>
            <li>Exclusive content</li>
          </ul>
          
          
          <Link to ="/login">
          <button style={styles.button}>Join Now</button>
          </Link>
        
        </div>
        <div style={styles.membershipCard}>
          <h2 style={styles.membershipTitle}>VIP</h2>
          <p style={styles.price}>$29.99/month</p>
          <ul style={styles.benefits}>
            <li>All Premium plan benefits</li>
            <li>Personalized support</li>
            <li>Free event tickets</li>
            <li>VIP lounge access</li>
          </ul>
          
          <Link to ="/login">
          <button style={styles.button}>Join Now</button>
          </Link>
        
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#333',
  },
  membershipContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  membershipCard: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    width: '30%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  membershipTitle: {
    fontSize: '1.5em',
    color: '#333',
  },
  price: {
    fontSize: '1.2em',
    color: '#555',
  },
  benefits: {
    listStyleType: 'none',
    padding: '0',
    fontSize: '1em',
    color: '#666',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default MembershipPage;
