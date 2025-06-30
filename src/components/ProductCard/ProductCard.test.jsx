import {render, screen} from '@testing-library/react';
import ProductCard from './ProductCard';
import { describe, expect } from 'vitest';

describe ("ProductCard", () => {
    const mockProduct = {
            title: "Test Product",
    description: "A great product",
    image: "/test-image.jpg",
    price: 42,
    productId: 123,
}

it("renders product card with correct details", () => {
    render(<ProductCard {...mockProduct} />);
    const titleElement = screen.getByText(mockProduct.title);
    const descriptionElement = screen.getByText(mockProduct.description);
    const priceElement = screen.getByText(`$${mockProduct.price}.00`);
    const imageElement = screen.getByRole('img', { name: mockProduct.title });
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockProduct.image);
    expect(imageElement).toHaveAttribute('alt', mockProduct.title);
    const productIdElement = screen.getByText(`ID: ${mockProduct.productId}`);
    expect(productIdElement).toBeInTheDocument();
})
});

