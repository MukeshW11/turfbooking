import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
// import './HomePage.css'; // Import the custom CSS

const courses = [
    { id: 1, name: "MSG", imageUrl: 'https://media.hudle.in/venues/f2c66e73-cb5e-43d8-8a56-7830d049876d/photo/c4ebff3a5cd0034f58457a012e63a11e54e64cb3' },
    { id: 2, name: 'CPL Cricket Turf', imageUrl: 'https://media.hudle.in/venues/af93df5c-4ac4-4b76-b2a1-a6a0488eba7e/photo/7e6b1ffc351a1b8f0153af7b5e8062c4cef967b6' },
    { id: 3, name: 'Stadium Greens Cricket Turf', imageUrl: 'https://media.hudle.in/venues/79e976aa-94f5-428c-85b9-4883c5db2992/photo/4092e9934ce209429115c51a561ee1822c60a0fa' },
    { id: 4, name: "3 C's Sports Ground", imageUrl: 'https://media.hudle.in/venues/a23ce2e3-ccef-4f07-9db0-18a6f33daa18/photo/777c7841d1127e022a4ca4ef6e6f215f676ec32e' },
    
];

const Homecric = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Choose the Turf You Want</h1>
            <h5 className="text-center mb-4">Select a Turf to Get Started</h5>
            <Row xs={1} sm={2} md={3} className="g-4">
                {courses.map((course) => (
                    <Col key={course.id}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={course.imageUrl} alt={course.name} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{course.name}</Card.Title>
                                <Button 
                                    variant="primary" 
                                    className="mt-auto" 
                                    as={Link} 
                                    to={`/cricket/booknow/${course.id}`}
                                >
                                    View Turf
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Homecric;
