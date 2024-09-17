import React from 'react';
import './Footer.css';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-row">
          <Col md={3} className="footer-col">
            <h2 className='murali-f'>Murali</h2>
            <p>
            Unleash your inner hero and be part of something greater.
             At Hero Headquarters, we're dedicated to celebrating the extraordinary and the everyday.             </p>
          </Col>
          {/* <Col md={3} className="footer-col">
            <h3>Quick Links</h3>
            <Link className="footer-link" to={'/'}>Home</Link>
            <Link className="footer-link" to={'/about'}>About</Link>
            <Link className="footer-link" to={'/user'}>Grievance</Link>
          </Col> */}
          <Col md={3} className="footer-col">
            <h3>Resources</h3>
            <a className="footer-link" href="">React</a>
            <a className="footer-link" href="">React Bootstrap</a>
            <a className="footer-link" href="">Bootswatch</a>
            <a className="footer-link" href="">Tailwind CSS</a>
          </Col>
          <Col md={3} className="footer-col">
            <h3>Contact</h3>
            <input type="email" className="footer-input" placeholder="Enter your email" />
            <button className="footer-btn">Submit</button>
            <div className="footer-icons">
              <FaInstagram className="footer-icon" />
              <CiLinkedin className="footer-icon" />
              <FaFacebook className="footer-icon" />
              <FaYoutube className="footer-icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
