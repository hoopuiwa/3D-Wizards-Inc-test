import { Col, Container, Row, Form, Button } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <Row>
        <Col className="text-start">
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
        <Col className="text-center">
          <br />
          <a href="#" className="d-block">About Us</a>
          <a href="#" className="d-block">Employment</a>
          <a href="#" className="d-block">Videos</a>
        </Col>
        <Col className="text-end">
        {/* "Could not find the module" error
          <h5>CONNECT</h5>
          <hr />
          <Form>
            <Form.Group>
              <p className="mb-2">Sign in for the latest updates</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Control
                  type="email"
                  placeholder="Enter Email Address"
                  style={{ marginRight: '10px' }}
                />
                <Button variant="primary">Join</Button>
              </div>
            </Form.Group>
          </Form> 
          */}
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
