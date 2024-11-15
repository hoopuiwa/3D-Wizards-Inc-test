'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

/* Filter top seller products */
const products = [
  {
    id: 1,
    name: 'Product a',
    type: 'Product a',
    colors: 2,
    price: '$115',
    image: '/images/3d-wizards-lowres.png',
    bestSeller: true,
  },
  {
    id: 2,
    name: 'Product b',
    type: 'Product b',
    colors: 1,
    price: '$200',
    image: '/images/3d-wizards-lowres.png',
    bestSeller: true,
  },
  {
    id: 3,
    name: 'Product c',
    type: 'Product c',
    colors: 2,
    price: '$123',
    image: '/images/3d-wizards-lowres.png',
    bestSeller: false,
  },
  {
    id: 4,
    name: 'Product d',
    type: 'Product d',
    colors: 7,
    price: '$115',
    image: '/images/3d-wizards-lowres.png',
    bestSeller: true,
  },
  {
    id: 5,
    name: 'Product e',
    type: 'Product e',
    colors: 4,
    price: '$200',
    image: '/images/3d-wizards-lowres.png',
    bestSeller: true,
  },
  {
    id: 6,
    name: 'Product f',
    type: 'Product f',
    colors: 2,
    price: '$123',
    image: '/images/3d-wizards-lowres.png',
    bestSeller: false,
  },
].filter((product) => product.bestSeller);

const TopSellersPage = () => (
  <Container fluid>
    <Row>
      <Col>
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <h4>Top Sellers</h4>
        </Row>
        <Row>
          {products
            .filter((product) => product.bestSeller) // Filter top sellers directly here if needed
            .map((product) => (
              <Col md={4} key={product.id} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    {product.bestSeller && (
                      <Card.Text className="text-danger">Best Seller</Card.Text>
                    )}
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.type}</Card.Text>
                    <Card.Text>
                      {product.colors}
                      Colors
                    </Card.Text>
                    <Card.Text>{product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  </Container>
);

export default TopSellersPage;
