import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import * as reactRouterDom from "react-router-dom";
import ProductPage from "./ProductPage";

// Mock product data
const mockProducts = [
  {
    productId: 1,
    title: "Test Shirt",
    description: "A cool shirt",
    image: "shirts.png",
    price: 10,
  },
];

// Mock useLoaderData to return mockProducts
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useLoaderData: () => ({ products: mockProducts }),
  };
});

describe("ProductPage", () => {
  it("renders the main product image, title, and Add to Cart button", () => {
    render(<ProductPage />);
    expect(screen.getByAltText(/main product/i)).toBeInTheDocument();
    expect(screen.getByText(/product title/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add to cart/i })).toBeInTheDocument();
  });

it("shows fallback when no products are available", () => {
  vi.spyOn(reactRouterDom, "useLoaderData").mockReturnValueOnce({ products: [] });
  render(<ProductPage />);
  expect(screen.getByText(/no products available/i)).toBeInTheDocument();
});
});