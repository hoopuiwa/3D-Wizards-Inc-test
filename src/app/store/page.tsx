'use client';

import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Link from 'next/link';
/* Link to db later? */
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
];

const StorePage = () => {
  const [pickupToday, setPickupToday] = useState(false);

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="border-end">
          <h4>Pick Up Inperson</h4>
          <Form.Check
            type="switch"
            id="pickup-today-switch"
            label=""
            checked={pickupToday}
            onChange={() => setPickupToday(!pickupToday)}
          />
          <h5 className="mt-4">Categories</h5>
          {/* add files to store each page later if time */}
          <ul className="list-unstyled">
            <Link href="/store/best" passHref>
              <Button variant="link">Best Sellers</Button>
            </Link>
            <li>Color</li>
            <li>Size</li>
            <li>Animal</li>
            <li>etc</li>
          </ul>
          <h5 className="mt-4">Sale & Offers</h5>
          {/* make link to product */}
          <Form.Check label="Extra 25% off select styles" />
          <Form.Check label="See Price in Bag" />
          <Form.Check label="Sale" />
          <h5 className="mt-4">Search</h5>
          {/* make link to product */}
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Product Name"
                aria-label="Search"
              />
              <button className="btn btn-dark" type="submit"> Search </button>
            </div>
          </form>
        </Col>

        {/* Product Grid */}
        <Col md={9}>
          <Row>
            <Col className="d-flex justify-content-between align-items-center mb-3">
              <h4>Shop Your Store (xyz)</h4>
              <div>
                {/* make link to product */}
                <Button variant="link">Hide Filters</Button>
                <Button variant="link">Sort By</Button>
              </div>
            </Col>
          </Row>
          <Row>
            {products.map((product) => (
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
};

export default StorePage;
