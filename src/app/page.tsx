'use client';

import { Col, Container, Row } from 'react-bootstrap';
import Slideshow from '../components/Slideshow';

/** The Home page. */
const Home = () => {
  const images = [
    '/images/Slide_1.jpg',
    '/images/Slide_2.jpg',
    '/images/Slide_3.jpg', // Add your images here
  ];
  return (
    <main>
      <Container id="landing-page" fluid className="py-3">
        <Row className="align-middle text-center">
          <Col xs={12}>
            <Slideshow images={images} interval={7000} />
            <div
              style={{
                position: 'absolute',
                bottom: '5px',
                left: '20px',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                padding: '5px 10px',
                borderRadius: '5px',
                fontSize: '40px',
              }}
            >
              Here for all your 3D printing needs!
            </div>
          </Col>
        </Row>
        <Row className="align-middle text-center">
          <Col xs={4}>
            <h1>Catchy Headline and information!</h1>
          </Col>

          <Col xs={4}>
            <h1>Other Catchy Headline and information!</h1>
          </Col>

          <Col xs={4}>
            <h1> 3rd Catchy Headline and information!!!</h1>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
