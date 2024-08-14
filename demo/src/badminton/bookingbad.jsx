import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel, Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

// Sample data
const tutors = [
    { id: 1, name: 'John Doe', subject: 'Mathematics', fee: '$40/hr', image: 'https://media.hudle.in/venues/a4e723f4-862b-4ab9-9b2c-e07041b73d4a/photo/e1630a6dd90cc4e4e3ce1f55ff049e3e24ca67ff' },
    { id: 2, name: 'Jane Smith', subject: 'Physics', fee: '$35/hr', image: 'https://media.hudle.in/venues/74db4cdd-6c0b-4bc1-9529-9f690906e01a/photo/d2a605edac2f3c5132bf8bf729d592e1b5d699c3' },
    { id: 3, name: 'Michael Brown', subject: 'Chemistry', fee: '$45/hr', image: 'https://media.hudle.in/venues/55a00550-b5ab-49d0-b715-883647a4c07c/photo/54b4ef0f6482b05489211fb404b461f49a3d1b36' },
    { id: 4, name: 'Emily White', subject: 'Biology', fee: '$30/hr', image: 'https://media.hudle.in/venues/61ac75b8-f2ea-4125-aea7-4b1849002ba9/photo/21e9f8259d4cd93310e6558d539bd271cdf988c9' },
];

const courses = [
    { id: 1, price: "800 /hr", name: "Smash Arena", description: "Step into Smash Arena, where every game of badminton becomes a thrilling experience. This premium facility is designed for players of all levels, offering a top-notch environment to hone your skills or compete in exciting matches.", image: 'https://media.hudle.in/venues/a4e723f4-862b-4ab9-9b2c-e07041b73d4a/photo/224a588c819fc898b29f0a2062a5f87e97fc3c73' },
    { id: 2, price: "900 /hr", name: 'Ace Court Complex', description: "Welcome to Ace Court Complex, where badminton enthusiasts come to play at their best. This state-of-the-art facility is perfect for both casual players and competitive athletes seeking a premier playing environment.", image: "https://media.hudle.in/venues/74db4cdd-6c0b-4bc1-9529-9f690906e01a/photo/92f5b625ad109e4cd8ca1b29e01b1950a49acd7b" },
    { id: 3, price: "850 /hr", name: 'Rally Zone', description: "Experience the excitement of badminton at Rally Zone, a premier facility that combines excellent court conditions with modern amenities. Designed for enthusiasts and professionals alike, Rally Zone offers an unbeatable environment for your games.", image: 'https://media.hudle.in/venues/55a00550-b5ab-49d0-b715-883647a4c07c/photo/01df0713ca0f331985cf4142debb53d95211b927' },
    { id: 4, price: "900 /hr", name: "Shuttle Haven", description: "Shuttle Haven is your ultimate destination for an exceptional badminton experience. Designed to cater to players of all levels, this modern facility combines excellent court conditions with comprehensive amenities to support your game.", image: "https://media.hudle.in/venues/61ac75b8-f2ea-4125-aea7-4b1849002ba9/photo/9d0887b403f4fde2c0ae227598927f2add2b1c19" },
];

const Bookingbad = () => {
    const { id } = useParams();
    const course = courses.find(course => course.id === parseInt(id));
    const tutor = tutors.find(tutor => tutor.id === parseInt(id));

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
                                src={tutor.image}
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
                        <Link to ="../paymentpage">
                          <Button variant="primary" type="submit">
                            Book Now
                          </Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Bookingbad;
