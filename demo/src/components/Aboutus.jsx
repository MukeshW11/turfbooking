import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "d:/wallpaper/kroos4.jpeg"
import React from 'react';

function AboutUs() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary">About Us</h1>
        <p className="lead text-secondary">
          Discover the ultimate turf booking experience with us!
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src={pic}
            alt="Turf Image"
            className="img-fluid rounded mb-4"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-success">Our Mission</h2>
          <p className="text-dark">
            At our turf booking site, our mission is to provide an exceptional sports experience for athletes and enthusiasts of all levels. We are dedicated to offering high-quality, well-maintained facilities that ensure a safe, enjoyable, and memorable experience for everyone.
          </p>
          <h2 className="text-info">Why Choose Us?</h2>
          <ul className="text-dark">
            <li>State-of-the-art turf facilities</li>
            <li>Flexible booking options</li>
            <li>Competitive pricing</li>
            <li>Excellent customer service</li>
            <li>Convenient locations</li>
          </ul>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h3 className="card-title">Our Vision</h3>
              <p className="card-text">
                To be the leading provider of premium turf facilities, promoting a healthy and active lifestyle in our community.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h3 className="card-title">Our Values</h3>
              <p className="card-text">
                We are committed to excellence, sustainability, and inclusivity. We strive to create a welcoming environment for all.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-info text-white">
            <div className="card-body">
              <h3 className="card-title">Get in Touch</h3>
              <p className="card-text">
                Have questions or need assistance? <a href='/contactus' className="text-light">Contact us</a> at turfbay@turfbooker.com or call +91 9585698547.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
