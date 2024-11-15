import { Container, Row, Col } from 'react-bootstrap';

const AboutUsPage = async () => (
  <main>
    <Container id="about-us" fluid className="py-3">
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>
            ADD
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h3>Our Mission</h3>
          <p>
            ADD
          </p>
        </Col>
        <Col md={4}>
          <h3>Our Team</h3>
          <p>
            ADD
          </p>
        </Col>
        <Col md={4}>
          <h3>Contact Us</h3>
          <p>
            ADD
          </p>
        </Col>
      </Row>
    </Container>
  </main>
);

export default AboutUsPage;
