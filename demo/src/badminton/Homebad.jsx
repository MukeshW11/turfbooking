import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
// import './HomePage.css'; // Import the custom CSS

const courses = [
    { id: 1, name: "Smash Arena", imageUrl: 'https://media.hudle.in/venues/a4e723f4-862b-4ab9-9b2c-e07041b73d4a/photo/de329f2f76758d659a430cc780ad09f85be4dae7' },
    { id: 2, name: 'Ace Court Complex', imageUrl: 'https://media.hudle.in/venues/74db4cdd-6c0b-4bc1-9529-9f690906e01a/photo/158fa09957c8dbca259c7770aa0327ba827d08e3' },
    { id: 3, name: 'Rally Zone', imageUrl: 'https://media.hudle.in/venues/55a00550-b5ab-49d0-b715-883647a4c07c/photo/fe41be82b5d8674fca249374bff391024c3d4a92' },
    { id: 4, name: "Shuttle Haven", imageUrl: 'https://media.hudle.in/venues/61ac75b8-f2ea-4125-aea7-4b1849002ba9/photo/8d014ae2c22c21d35f199bd1bc96473f8b86fc3d' },
    
];

const Homebad = () => {
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
                                    to={`/badminton/booknow/${course.id}`}
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

export default Homebad;
