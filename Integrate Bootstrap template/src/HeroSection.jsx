import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col className='col-md-6'>
                        <h1>Hi, Hi, I'm John Deo.</h1>
                        <p className="subtitle">
                            A freelance Web developer from London. I convert custom web designs to bootstrap templates.
                        </p>
                        <p className="subtitle">
                            I make YouTube videos and write Blog.
                        </p>
                        <Button style={{marginTop:'30px'}}>I'M AVAILABLE</Button>
                        <div className="social-icons mt-3" style={{marginTop:'30px',padding:'10px'}}>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-twitter"></i>
                            <i className="bi bi-github"></i>
                            <i className="bi bi-youtube"></i>
                        </div>
                    </Col>
                    <Col className='col-md-6' >
                        <img src="https://redbrickworks.com/wp-content/uploads/2021/02/business-man.png" height={300} width={300} alt="John Deo" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;
