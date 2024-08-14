import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel, Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

// Sample data
const tutors = [
    { id: 1, name: 'John Doe', subject: 'Mathematics', fee: '$40/hr', image: 'https://media.hudle.in/venues/3b56540b-f266-49fe-b327-aec2d3ca7bcb/photo/39f36b08845f214427e63beb02383a02ab8af85d' },
    { id: 2, name: 'Jane Smith', subject: 'Physics', fee: '$35/hr', image: 'https://media.hudle.in/venues/af93df5c-4ac4-4b76-b2a1-a6a0488eba7e/photo/4d0e2e7005d5c6536c3a6362fce9592b68b7bf6f' },
    { id: 3, name: 'Michael Brown', subject: 'Chemistry', fee: '$45/hr', image: 'https://media.hudle.in/venues/79e976aa-94f5-428c-85b9-4883c5db2992/photo/22b1c2be1323220e49a3c2792984022adda0108e' },
    { id: 4, name: 'Emily White', subject: 'Biology', fee: '$30/hr', image: 'https://media.hudle.in/venues/a23ce2e3-ccef-4f07-9db0-18a6f33daa18/photo/973cd581f58f9d44422fcd139e2cd470fe521bfb' },
];

const courses = [
    { id: 1, price: "800 /hr", name: "MSG", description: "Experience the thrill of cricket at MSG Cricket Turf, where tradition meets excellence. Our state-of-the-art cricket facility is designed to offer an unparalleled playing experience for cricketers of all levels.", image: 'https://media.hudle.in/venues/f2c66e73-cb5e-43d8-8a56-7830d049876d/photo/c4ebff3a5cd0034f58457a012e63a11e54e64cb3' },
    { id: 2, price: "900 /hr", name: 'CPL Cricket Turf', description: "Step up to CPL Cricket Turf, where passion for cricket is brought to life with premium facilities and a welcoming atmosphere. Ideal for both enthusiasts and professionals, CPL Cricket Turf offers a top-notch cricketing experience designed to elevate every game.", image: "https://media.hudle.in/venues/af93df5c-4ac4-4b76-b2a1-a6a0488eba7e/photo/f3b1d6bb1c7c6ec9d60af81016395642b4f650bd" },
    { id: 3, price: "850 /hr", name: 'Stadium Greens Cricket Turf', description: "Stadium Greens Cricket Turf offers a premier cricketing experience with its top-quality facilities and vibrant atmosphere. Located in the heart of the sports district, this turf is ideal for both professional and amateur cricketers.", image: 'https://media.hudle.in/venues/79e976aa-94f5-428c-85b9-4883c5db2992/photo/14f0a3cd2a73d66f5ebe49cccfad95be5ee562b3' },
    { id: 4, price: "900 /hr", name: "3 C's Sports Ground", description: "Welcome to 3 C's Sports Ground, where cricket meets excellence in a premier facility designed to enhance your sporting experience. Whether you're a professional cricketer or a casual enthusiast, 3 C's Sports Ground offers everything you need for an exceptional game.", image: "https://media.hudle.in/venues/a23ce2e3-ccef-4f07-9db0-18a6f33daa18/photo/c7052566eaf01f724fc716a5844f89436dddbca9" },
];

const Bookingcric = () => {
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

export default Bookingcric;
