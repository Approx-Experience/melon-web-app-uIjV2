import { render, screen, fireEvent } from "@testing-library/react";
import MobileNavigationBar from "./MobileNavigationBar";
import { expect, it, test } from "vitest";

describe("NavBar Component", () => {
  it("renders the melon logo", () => {
    render(<MobileNavigationBar />);
    expect(screen.getByAltText("Melon Logo")).toBeInTheDocument();
  });

  test("hides other icons when search is active", () => {
    render(<MobileNavigationBar />);
    // Click the search icon
    const searchIcon = screen.getByAltText(/search icon/i);
    fireEvent.click(searchIcon);

    // The search input should be visible
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();

    // The account, favorite, and cart icons should NOT be in the document
    expect(screen.queryByAltText(/account icon/i)).not.toBeInTheDocument();
    expect(screen.queryByAltText(/favorites icon/i)).not.toBeInTheDocument();
    expect(screen.queryByAltText(/cart icon/i)).not.toBeInTheDocument();
  });

  test("toggles search input visibility", () => {
    render(<MobileNavigationBar />);
    const menuIcon = screen.getByAltText("Menu icon");
    fireEvent.click(menuIcon);

    const NewArrivals = screen.getByText("new arrivals");
    const men = screen.getByText("men");
    const women = screen.getByText("women");
    const accessories = screen.getByText("accessories");
    const shoes = screen.getByText("shoes");
    const sale = screen.getByText("sale");
    const exitButton = screen.getByAltText("Close menu");


    expect(NewArrivals).toBeInTheDocument();
    expect(men).toBeInTheDocument();
    expect(women).toBeInTheDocument();
    expect(accessories).toBeInTheDocument();
    expect(shoes).toBeInTheDocument();
    expect(sale).toBeInTheDocument();
    expect(exitButton).toBeInTheDocument();
  });

  test("closes the menu when the close icon is clicked", () => {
    render(<MobileNavigationBar />);

     const menuIcon = screen.getByAltText("Menu icon");
  fireEvent.click(menuIcon);
  
    const closeButton = screen.getByAltText("Close menu");
    fireEvent.click(closeButton);


    // Check that the menu items are no longer in the document
    expect(screen.queryByText("new arrivals")).not.toBeInTheDocument();
  
});

});
