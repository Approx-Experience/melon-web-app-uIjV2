import { render, screen } from "@testing-library/react";
import BestSellers from "./BestSellers";

const mockProducts = [
  {
    productId: 1,
    title: "Test Product",
    description: "A great product",
    image: "/test-image.jpg",
    price: 42,
  },
];

describe("BestSellers Component", () => {
  it('renders the "best sellers" heading', () => {
    render(<BestSellers products={mockProducts}/>);
    const heading = screen.getByRole("heading", { name: /best sellers/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the "The hottest trends in fashion today" subheading', () => {
    render(<BestSellers products={mockProducts}/>);
    const subheading = screen.getByRole("heading", {
      name: /the hottest trends in fashion today/i,
    });
    expect(subheading).toBeInTheDocument();
  });

});
