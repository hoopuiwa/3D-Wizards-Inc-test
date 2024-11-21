import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUsPage = async () => (
  <main>
    <Container id="about-us" fluid className="py-3">
      <Row className="justify-content-center align-items-center m-3">
        <Col md={8}>
          <h3 className="py-4">Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center m-3">
        <Col md={8}>
          <h3 className="py-4">Business History</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center m-3">
        <Col md={8}>
          <h3 className="py-4">Our Team</h3>
          <Row className="mb-4">
            <Col className="d-flex align-items-center">
              <Image src="/images/3d-wizards-lowres.png" alt="Voxel" width="240" height="240" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="d-flex align-items-center">
              <Image src="/images/3d-wizards-lowres.png" alt="Voxel" width="240" height="240" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="d-flex align-items-center">
              <Image src="/images/3d-wizards-lowres.png" alt="Voxel" width="240" height="240" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </p>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="d-flex align-items-center">
              <Image src="/images/3d-wizards-lowres.png" alt="Voxel" width="240" height="240" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center m-3">
        <Col md={8}>
          <h3 className="py-4">Future plans</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </Row>
    </Container>
  </main>
);

export default AboutUsPage;
