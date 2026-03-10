
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navigation from "../../Module/Navigation";
import Footer from "../../Module/Footer";

function RuleFact(){
    return(<>
    <Navigation/>




    <Container>
            <h1 className="text-center mt-5 mb-4">Rule For Joining Club </h1>
            <Row>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Membership Eligibility</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Applicants must meet the minimum age requirement set by the club to be eligible for membership.</li>
                                    <li>Membership may be open to individuals, families, or specific groups as determined by the club's policies.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Application Process</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Prospective members must complete the official membership application form provided by the club.</li>
                                    <li>Submission of the application form does not guarantee membership and is subject to approval by the club management.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Membership Fees</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Members are required to pay an annual membership fee, the amount of which will be determined by the club.</li>
                                    <li>Membership fees are non-refundable and must be paid in full upon acceptance of the membership application.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Code of Conduct</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>All members must adhere to the club's code of conduct, which includes respecting fellow members, staff, and facilities.</li>
                                    <li>Any behavior deemed inappropriate, disruptive, or disrespectful may result in the suspension or termination of membership.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Facility Use</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Members are entitled to use the club's facilities and amenities in accordance with the club's rules and regulations.</li>
                                    <li>Prior reservations may be required for certain facilities, and usage may be subject to availability.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Liability Waiver</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>By joining the club, members acknowledge and accept any risks associated with participating in club activities or using club facilities.</li>
                                    <li>Members agree to waive any claims against the club, its management, or staff for injuries, damages, or losses incurred during club-related activities.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>






    <Footer/></>)
};
export default RuleFact;