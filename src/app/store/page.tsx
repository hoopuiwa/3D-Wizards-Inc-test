'use client';

import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Link from 'next/link';

/* Product data maybe tie to db later */
const products = [
  {
    id: 1,
    name: 'Crystal Dragon',
    type: 'dragon',
    dragon: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    price: '$25',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
    pickupInperson: true,
  },
  {
    id: 2,
    name: 'Mech dragon',
    type: 'dragon',
    dragon: true,
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$25',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  // add adjustable price later dont know how to make without making a new const
  {
    id: 3,
    name: 'Baby dragon',
    type: 'dragon',
    dragon: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    thirdColor: ['red', 'blue'], // Array of color names
    basePrice: '$10',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
    egg: false,
  },
  {
    id: 4,
    name: 'Frog',
    type: 'animal',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 5,
    name: 'Axolotl',
    type: 'animal',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 6,
    name: 'Gecko',
    type: 'animal',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 7,
    name: 'Rat',
    type: 'animal',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$25',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 8,
    name: 'Ferret',
    type: 'animal',
    animal: true,
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$30',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 9,
    name: 'Imperial Dragon',
    type: 'animal',
    dragon: true,
    primaryColor: ['red', 'blue'], // Array of color names
    price: '$25',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 9,
    name: 'Knight',
    type: 'animal',
    person: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    thirdColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
  {
    id: 9,
    name: 'Samurai',
    type: 'animal',
    person: true,
    primaryColor: ['red', 'blue'], // Array of color names
    secondaryColor: ['red', 'blue'], // Array of color names
    thirdColor: ['red', 'blue'], // Array of color names
    price: '$20',
    image: '/images/3d-wizards-lowres.png',
    size: { // Adjustable size range
      min: 0.5, // Minimum size
      max: 1.2, // Maximum size
    },
  },
];

const StorePage = () => {
  const [size, setSize] = useState('');
  const [pickupInperson, setPickupInperson] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  /* allows for multiple filters */
  const displayedProducts = products.filter((product) => {
    const pickupFilter = pickupInperson ? product.pickupInperson : true;
    const searchFilter = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const sizeFilter = size
      ? parseFloat(size) >= product.size.min && parseFloat(size) <= product.size.max
      : true;
    return pickupFilter && searchFilter && sizeFilter;
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
            <Link href="/store/dragon" passHref>
              <Button variant="link">Dragon</Button>
            </Link>
            <Link href="/store/animal" passHref>
              <Button variant="link">Animal</Button>
            </Link>
            <Link href="/store/person" passHref>
              <Button variant="link">Person</Button>
            </Link>
          </ul>
          <h5 className="mt-4">Sale & Offers</h5>
          {/* non working button */}
          <Form.Check label="Extra 25% off select styles" />
          <Form.Check label="See Price in Bag" />
          {/* Only working button left over used for example */}
          {/* <Form.Check
            label="Show Sale Items Only"
            checked={showSaleOnly}
            onChange={() => setShowSaleOnly(!showSaleOnly)}
          /> */}
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
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Size in range of 0.5 to 1.2"
                value={size}
                aria-label="Search"
                onChange={(e) => setSize(e.target.value)}
              />
              <button className="btn btn-dark" type="submit" onClick={(e) => e.preventDefault()}>
                Enter
              </button>
            </div>
          </form>
        </Col>

        {/* Product Grid */}
        <Col md={9}>
          <Row>
            <Col className="d-flex justify-content-between align-items-center mb-3">
              <h4>Shop Your Store (xyz)</h4>
              <div>
                <h4>Pick Up Inperson</h4>
                {/* Does nothing left over from the ai formating can be used later if wanted */}
                <Form.Check
                  type="switch"
                  id="pickup-today-switch"
                  label=""
                  checked={pickupInperson}
                  onChange={() => setPickupInperson(!pickupInperson)}
                />
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
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.type}</Card.Text>
                    <Card.Text>
                      {product.primaryColor}
                      Primary
                    </Card.Text>
                    <Card.Text>
                      {product.secondaryColor}
                      Secondary
                    </Card.Text>
                    <Card.Text>
                      {product.thirdColor}
                      Third
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
