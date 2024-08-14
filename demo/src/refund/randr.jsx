import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function RefundReturnPolicy() {
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-4 text-primary">Return and Refund Policy</h1>
          <p className="lead text-secondary">
            We strive to provide the best experience for our customers. Please review our return and refund policy for turf bookings below.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-white">
              Cancellation Policy
            </Card.Header>
            <Card.Body>
              <Card.Text>
                We understand that plans can change. If you need to cancel your booking, please review our cancellation policy below:
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Eligibility:</strong> Cancellations must be made at least 24 hours before the scheduled booking time to be eligible for a full refund.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>How to Cancel:</strong> To cancel your booking, please contact our customer service team at <a href="mailto:support@turfbooker.com">support@turfbooker.com</a> or call +91 9585698547. Provide your booking reference and details.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Last-Minute Cancellations:</strong> Cancellations made within 24 hours of the booking time will not be eligible for a refund.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-white">
              Refund Policy
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Our refund policy outlines the conditions under which refunds are granted. Please read the details below:
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Processing Time:</strong> Refunds will be processed within 7-10 business days after the cancellation request has been approved. The refund will be issued to the original payment method.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Full Refunds:</strong> Full refunds are granted for cancellations made at least 24 hours before the scheduled booking time.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Partial Refunds:</strong> No partial refunds are available for last-minute cancellations or no-shows.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Non-Refundable:</strong> Bookings made with promotional codes or special offers are non-refundable.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <Card>
            <Card.Header className="bg-primary text-white">
              Contact Us
            </Card.Header>
            <Card.Body>
              <Card.Text>
                If you have any questions regarding our return and refund policy, please do not hesitate to reach out to us.
              </Card.Text>
              <p>
                Email: <a href="mailto:support@turfbooker.com">support@turfbooker.com</a><br />
                Phone: +91 9585698547
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RefundReturnPolicy;
