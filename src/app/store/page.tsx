'use client';

import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Link from 'next/link';

/* Product data maybe tie to db later */
const products = [
  {
    id: 1,
    name: 'Product a',
    type: 'Product a',
    colors: 2,
    price: '$115',
    image: '/images/3d-wizards-lowres.png',
    bestSeller: true,
    sale: true,
    pickupInperson: true,
  },
  {
    id: 2,
    name: 'Product b',
    type: 'Product b',
    colors: 1,
    price: '$200',
    image: '/images/3d-wizards-lowres.png',
    bestSeller: true,
    sale: true,
  },
  {
    id: 3,
    name: 'Product c',
    type: 'Product c',
    colors: 2,
    price: '$123',
    image: '/images/3d-wizards-lowres.png',
    bestSeller: false,
    sale: true,
  },
  {
    id: 4,
    name: 'Product d',
    type: 'Product d',
    colors: 7,
    price: '$115',
    image: '/images/3d-wizards-lowres.png',
    bestSeller: true,
    sale: false,
  },
  {
    id: 5,
    name: 'Product e',
    type: 'Product e',
    colors: 4,
    price: '$200',
    image: '/images/3d-wizards-lowres.png',
    bestSeller: true,
    sale: false,
  },
  {
    id: 6,
    name: 'Product f',
    type: 'Product f',
    colors: 2,
    price: '$123',
    image: '/images/3d-wizards-lowres.png',
    bestSeller: false,
    sale: true,
  },
];

const StorePage = () => {
  const [pickupInperson, setPickupInperson] = useState(false);
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  /* allows for multiple filters */
  const displayedProducts = products.filter((product) => {
    const saleFilter = showSaleOnly ? product.sale : true;
    const pickupFilter = pickupInperson ? product.pickupInperson : true;
    // added a basic search filter, filters by product name
    const searchFilter = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return saleFilter && pickupFilter && searchFilter;
  });

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="border-end">
          <h4>Pick Up Inperson</h4>
          {/* Hidden product a can be picked up inperson used to show either switch or check could be used */}
          <Form.Check
            type="switch"
            id="pickup-today-switch"
            label=""
            checked={pickupInperson}
            onChange={() => setPickupInperson(!pickupInperson)}
          />
          {/* Does nothing */}
          <h5 className="mt-4">Categories</h5>
          <ul className="list-unstyled">
            {/* Link to the nested folder */}
            <Link href="/store/best" passHref>
              <Button variant="link">Best Sellers</Button>
            </Link>
            {/* Examples of other catigories */}
            <li>Color</li>
            <li>Size</li>
            <li>Animal</li>
            <li>etc</li>
          </ul>
          <h5 className="mt-4">Sale & Offers</h5>
          {/* non working button */}
          <Form.Check label="Extra 25% off select styles" />
          <Form.Check label="See Price in Bag" />
          {/* Only working button */}
          <Form.Check
            label="Show Sale Items Only"
            checked={showSaleOnly}
            onChange={() => setShowSaleOnly(!showSaleOnly)}
          />
          {/* Search bar doesn't work */}
          <h5 className="mt-4">Search</h5>
          <form>
            <div className="input-group">
              <input
              // Updated the search function to have basic function, not that good but its a start
                type="text"
                className="form-control"
                placeholder="Enter Product Name"
                value={searchTerm}
                aria-label="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-dark" type="submit">Search</button>
            </div>
          </form>
        </Col>

        {/* Product Grid */}
        <Col md={9}>
          <Row>
            <Col className="d-flex justify-content-between align-items-center mb-3">
              <h4>Shop Your Store (xyz)</h4>
              <div>
                {/* Does nothing left over from the ai formating can be used later if wanted */}
                <Button variant="link">Hide Filters</Button>
                <Button variant="link">Sort By</Button>
              </div>
            </Col>
          </Row>
          <Row>
            {/* Each "Product" info image, name, cost, etc */}
            {displayedProducts.map((product) => (
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
                    {product.sale && (
                      <Card.Text className="text-danger">Sale</Card.Text>
                    )}
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
