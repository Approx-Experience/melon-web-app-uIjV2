import { render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";
import { expect, it } from "vitest";

describe("NavBar Component", () => {
  it("renders the melon logo", () => {
    render(<NavigationBar />);
    expect(screen.getByAltText("Melon Logo")).toBeInTheDocument();
  });

  it("renders the search input", () => {
    render(<NavigationBar />);
    expect(
      screen.getByPlaceholderText("Find your next fit"),
    ).toBeInTheDocument();
  });

  it("renders the account, favorites, and cart icons", () => {
    render(<NavigationBar />);
    expect(screen.getByAltText("Account icon")).toBeInTheDocument();
    expect(screen.getByAltText("Favorites icon")).toBeInTheDocument();
    expect(screen.getByAltText("Cart icon")).toBeInTheDocument();
  });

  it("renders the navigation links", () => {
    render(<NavigationBar />);
    expect(screen.getByText("new arrivals")).toBeInTheDocument();
    expect(screen.getByText("men")).toBeInTheDocument();
    expect(screen.getByText("women")).toBeInTheDocument();
    expect(screen.getByText("accessories")).toBeInTheDocument();
    expect(screen.getByText("shoes")).toBeInTheDocument();
    expect(screen.getByText("sale")).toBeInTheDocument();
  });
});
