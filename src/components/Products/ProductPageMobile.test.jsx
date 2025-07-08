import { render, screen, fireEvent } from "@testing-library/react";
import { describe, vi } from "vitest";
import * as reactRouterDom from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ProductPageMobile from "./ProductPageMobile.jsx";


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

const mockStore = configureStore([]);
const initialState = { productSizeReducer: { selectedSize: null } };

describe("ProductPageMobile", () => {
  it("selects a size button and applies the selected class", () => {
    const store = mockStore(initialState);
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
});