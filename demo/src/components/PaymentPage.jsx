import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const PaymentPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [paymentType, setPaymentType] = useState('full');
    const [paymentMode, setPaymentMode] = useState('');
    const [amount, setAmount] = useState(1000); // Assuming full amount is 1000

    // Card details state
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    // UPI details state
    const [upiId, setUpiId] = useState('');

    const handlePayment = (e) => {
        e.preventDefault();
        // Add payment logic here
        console.log(`Name: ${name}, Email: ${email}, Payment Type: ${paymentType}, Payment Mode: ${paymentMode}, Amount: ${amount}, Card Number: ${cardNumber}, Expiry Date: ${expiryDate}, CVV: ${cvv}, UPI ID: ${upiId}`);
    };

    const handlePaymentTypeChange = (e) => {
        const selectedType = e.target.value;
        setPaymentType(selectedType);
        setAmount(selectedType === 'full' ? 1000 : 500); // Assuming advance amount is 500
    };

    const handlePaymentModeChange = (e) => {
        setPaymentMode(e.target.value);
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="mb-4">Payment Information</Card.Title>
                            <Form onSubmit={handlePayment}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter your name" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formEmail" className="mt-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPaymentType" className="mt-3">
                                    <Form.Label>Payment Type</Form.Label>
                                    <Form.Check 
                                        type="radio" 
                                        label="Pay Full Amount" 
                                        value="full"
                                        checked={paymentType === 'full'}
                                        onChange={handlePaymentTypeChange}
                                    />
                                    <Form.Check 
                                        type="radio" 
                                        label="Pay Advance" 
                                        value="advance"
                                        checked={paymentType === 'advance'}
                                        onChange={handlePaymentTypeChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPaymentMode" className="mt-3">
                                    <Form.Label>Payment Mode</Form.Label>
                                    <Form.Check 
                                        type="radio" 
                                        label="Card" 
                                        name="paymentMode"
                                        value="card"
                                        checked={paymentMode === 'card'}
                                        onChange={handlePaymentModeChange}
                                    />
                                    <Form.Check 
                                        type="radio" 
                                        label="UPI" 
                                        name="paymentMode"
                                        value="upi"
                                        checked={paymentMode === 'upi'}
                                        onChange={handlePaymentModeChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formAmount" className="mt-3">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        value={`$${amount}`}
                                        readOnly
                                    />
                                </Form.Group>

                                {(paymentMode === 'card') && (
                                    <>
                                        <Form.Group controlId="formCardNumber" className="mt-3">
                                            <Form.Label>Card Number</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Card Number" 
                                                value={cardNumber}
                                                onChange={(e) => setCardNumber(e.target.value)}
                                                required={paymentMode === 'card'}
                                            />
                                        </Form.Group>

                                        <Row className="mt-3">
                                            <Col>
                                                <Form.Group controlId="formExpiryDate">
                                                    <Form.Label>Expiry Date</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        placeholder="MM/YY" 
                                                        value={expiryDate}
                                                        onChange={(e) => setExpiryDate(e.target.value)}
                                                        required={paymentMode === 'card'}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="formCvv">
                                                    <Form.Label>CVV</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        placeholder="CVV" 
                                                        value={cvv}
                                                        onChange={(e) => setCvv(e.target.value)}
                                                        required={paymentMode === 'card'}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </>
                                )}

                                {(paymentMode === 'upi') && (
                                    <Form.Group controlId="formUpiId" className="mt-3">
                                        <Form.Label>UPI ID</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="UPI ID" 
                                            value={upiId}
                                            onChange={(e) => setUpiId(e.target.value)}
                                            required={paymentMode === 'upi'}
                                        />
                                    </Form.Group>
                                )}

                                <Button variant="primary" type="submit" className="mt-4">
                                    Pay Now
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PaymentPage;
