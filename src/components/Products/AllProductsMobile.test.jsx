import {render, screen } from '@testing-library/react';
import AllProducts from './AllProducts.jsx';
import { it, expect } from 'vitest';
// Mocking useLoaderData to return a predefined set of products
import { vi } from 'vitest';

const mockProducts = [
  {
    productId: 1,
    title: "Test Product 1",
    description: "A great product",
    image: "/test-image1.jpg",
    price: 42,
  },
  {
    productId: 2,
    title: "Test Product 2",
    description: "Another great product",
    image: "/test-image2.jpg",
    price: 50,
  },
];

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLoaderData: () => ({ products: mockProducts }),
  };
});
    
    it("renders all products with correct details", () => {
  render(<AllProducts />);
  mockProducts.forEach(product => {
    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}.00`)).toBeInTheDocument();
    const imageElement = screen.getByRole('img', { name: product.title });
    expect(imageElement).toHaveAttribute('src', product.image);
    expect(imageElement).toHaveAttribute('alt', product.title);
  });
});