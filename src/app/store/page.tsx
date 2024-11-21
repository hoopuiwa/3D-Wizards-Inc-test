// Import necessary modules (if this is a React project)
import React from 'react';

// Define the Product type
type Product = {
  id: number;
  name: string;
  type: string;
  dragon?: boolean;
  animal?: boolean;
  primaryColor: string[]; // Array of primary colors
  secondaryColor?: string[]; // Optional array of secondary colors
  thirdColor?: string[]; // Optional array of third colors
  price: string;
  image: string;
  size: {
    min: number;
    max: number;
  };
  pickupInperson?: boolean;
  egg?: boolean;
};

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: 'Crystal Dragon',
    type: 'dragon',
    dragon: true,
    primaryColor: ['red', 'blue', 'green'],
    secondaryColor: ['red', 'blue'],
    thirdColor: [],
    price: '$25',
    image: '/images/crystal-dragon.jpg',
    size: { min: 0.5, max: 1.2 },
    pickupInperson: true,
  },
  {
    id: 2,
    name: 'Mech Dragon',
    type: 'dragon',
    dragon: true,
    primaryColor: ['red', 'blue'],
    secondaryColor: [],
    thirdColor: [],
    price: '$25',
    image: '/images/mech-dragon.jpg',
    size: { min: 0.5, max: 1.2 },
  },
  {
    id: 3,
    name: 'Golden Griffin',
    type: 'animal',
    animal: true,
    primaryColor: ['gold', 'yellow'],
    secondaryColor: ['white'],
    thirdColor: ['black'],
    price: '$35',
    image: '/images/golden-griffin.jpg',
    size: { min: 1.0, max: 2.5 },
    pickupInperson: false,
  },
  // Add more products as needed
];

// Filters based on selected colors
const selectedSecondaryColors: string[] = ['red', 'blue'];
const selectedThirdColors: string[] = ['black', 'white'];

const filterProducts = (allProducts: Product[]) => allProducts.filter((product) => {
  const secondaryColorMatch = selectedSecondaryColors.length === 0
      || selectedSecondaryColors.some((color) => product.secondaryColor?.includes(color));

  const thirdColorMatch = selectedThirdColors.length === 0
      || selectedThirdColors.some((color) => product.thirdColor?.includes(color));

  return secondaryColorMatch && thirdColorMatch;
});

// Component to display filtered products
const ProductList: React.FC = () => {
  // Get filtered products inside the component
  const filteredProducts = filterProducts(products);

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>
                Price:
                {product.price}
              </p>
              <p>
                Primary Colors:
                {product.primaryColor.join(', ')}
              </p>
              {product.secondaryColor && (
                <p>
                  Secondary Colors:
                  {product.secondaryColor.join(', ')}
                </p>
              )}
              {product.thirdColor && (
                <p>
                  Third Colors:
                  {product.thirdColor.join(', ')}
                </p>
              )}
            </div>
          ))
        ) : (
          <p>No products match your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
