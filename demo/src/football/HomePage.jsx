import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
// import './HomePage.css'; // Import the custom CSS

const courses = [
    { id: 1, name: "Let's Play", imageUrl: 'https://media.hudle.in/venues/3b56540b-f266-49fe-b327-aec2d3ca7bcb/photo/a800fa984ee2a32b5a9145db0672f6522df5824f' },
    { id: 2, name: 'Arena 99', imageUrl: 'https://media.hudle.in/venues/4c6854de-3992-4969-bdd2-da2947bdca83/photo/2605a8fb118f68f79ff42d8b93aa540bd2233585' },
    { id: 3, name: 'Crossbar', imageUrl: 'https://media.hudle.in/venues/36ea11a9-8046-4f05-92a7-bc64abc07297/photo/b553c7cf017a41d7db300a1995a70b2798fcd4af' },
    { id: 4, name: 'Ecolawn', imageUrl: 'https://media.hudle.in/venues/d8973590-983f-4bbe-a6c4-ae8be12230a2/photo/36fca711b8c60c25a2c622344297f59d2bbcd85f' },
    { id: 5, name: 'TurfZone', imageUrl: 'https://media.hudle.in/venues/54d985f9-8cfd-4b0a-9cb5-2fba6765ebf1/photo/158922c2fbd0a768bcfca3de202493cd0cabf364' },
    { id: 6, name: 'LuxeLawn', imageUrl: 'https://media.hudle.in/venues/47d072fe-5172-4892-9277-1a3308fabba0/photo/a041cad9f0fdff6c6791dc7b3b226610537ac82b' }
    // Add more courses as needed
];

const HomePage = () => {
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
                                    to={`/football/booknow/${course.id}`}
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

export default HomePage;
