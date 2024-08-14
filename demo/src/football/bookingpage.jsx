import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel, Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

// Sample data
const courses = [
  { id: 1, price: "800 /hr", name: "Let's play", description: "Welcome to Let's Play – the ultimate destination for sports enthusiasts and fitness buffs! Located in the heart of the city, Let's Play offers a state-of-the-art facility designed to provide a top-notch sporting experience for players of all ages and skill levels.", image: 'https://media.hudle.in/venues/3b56540b-f266-49fe-b327-aec2d3ca7bcb/photo/a800fa984ee2a32b5a9145db0672f6522df5824f' },
  { id: 2, price: "900 /hr", name: 'Arena 99', description: "Welcome to Arena 99 – your premier destination for all things sports and recreation! Nestled conveniently in the city, Arena 99 offers a cutting-edge facility that caters to athletes and sports enthusiasts of all ages and skill levels.", image: "https://media.hudle.in/venues/4c6854de-3992-4969-bdd2-da2947bdca83/photo/6fcf9c3514f54e7613ffc7e0d2dd065a1a94755e" },
  { id: 3, price: "850 /hr", name: 'Crossbar', description: "Welcome to Crossbar – the premier turf facility designed for athletes and sports enthusiasts alike! Situated in a prime location, Crossbar offers a top-tier environment for all your sporting needs, from casual games to competitive matches.", image: 'https://media.hudle.in/venues/36ea11a9-8046-4f05-92a7-bc64abc07297/photo/9a2b4c7044d267b68f94cae11c4e5b3c557e3e1c' },
  { id: 4, price: "900 /hr", name: 'EcoLawn', description: "Welcome to EcoLawn – the eco-friendly sports facility designed for athletes and enthusiasts who care about the environment. Situated in a prime location, EcoLawn offers a sustainable and high-quality turf experience that combines top-notch athletic performance with a commitment to environmental responsibility.", image: "https://media.hudle.in/venues/122e3970-a809-474e-9078-fd491771eb10/photo/0cb3f6a9ea97346cd69d3f8a8ab787656e617ff6" },
  { id: 5, price: "1200 /hr", name: 'TurfZone', description: "Welcome to TurfZone – your ultimate destination for top-tier sports and recreation! Conveniently located, TurfZone offers a premium facility designed to cater to athletes and sports enthusiasts of all levels.", image: "https://media.hudle.in/venues/54d985f9-8cfd-4b0a-9cb5-2fba6765ebf1/photo/43096965a99ca4c69dea15847403c3f9f10634a4" },
  { id: 6, price: "1500 /hr", name: 'LuxeLawn', description: "Welcome to LuxeLawn – where luxury and sports excellence converge! Nestled in the heart of the city, LuxeLawn is the ultimate destination for those who seek the best in sports and recreation.", image: "https://media.hudle.in/venues/47d072fe-5172-4892-9277-1a3308fabba0/photo/a03cba4eb7871f23f0f54427bbae60e4e07d9017" }
];

const BookingPage = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    // Add booking logic here
    console.log(`Date: ${selectedDate}, Start Time: ${startTime}, End Time: ${endTime}`);
  };

  return (
    <div className="container mt-5">
      <Row>
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={course.image}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={course.image}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6}>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
          <Form onSubmit={handleBooking}>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="form-control"
                minDate={new Date()}
                showDisabledMonthNavigation
              />
            </Form.Group>
            <Form.Group controlId="formTimeFrom" className="mt-3">
              <Form.Label>From</Form.Label>
              <Form.Control 
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </Form.Group>
            <br/>
            <Form.Group controlId="formTimeTo" className="mt-3">
              <Form.Label>To</Form.Label>
              <Form.Control 
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </Form.Group>
            <br />
            <p>Price: {course.price}</p>

            <Link to ="../paymentpage"><Button variant="primary" type="submit">
              Book Now
            </Button></Link>
            
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default BookingPage;
