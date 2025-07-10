import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import * as reactRouterDom from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productSizeReducer from "../../redux/productSizeSlice";

import ProductPageMobile from "./ProductPageMobile";


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

const store = configureStore({ reducer: { productSizeReducer } });
const initialState = { productSizeReducer: { selectedSize: null } };

describe("ProductPageMobile", () => {
  it("selects a size button and applies the selected class", () => {
    render(
      <Provider store={store}>
        <ProductPageMobile />
      </Provider>
    );

    // Find the "m" size button and click it
    const mButton = screen.getByRole("button", { name: "m" });
    fireEvent.click(mButton);

    // The button should now have the "selected" class
    expect(mButton.className).toMatch(/selected/);
  });
  it("renders the main product image, title, and price", () => {
    render(
      <Provider store={store}>
        <ProductPageMobile />
      </Provider>
    );
    expect(screen.getByAltText(/main product/i)).toBeInTheDocument();
    expect(screen.getByText(/product title placeholder/i)).toBeInTheDocument();
    expect(screen.getByText("$10.00")).toBeInTheDocument();
  });
});