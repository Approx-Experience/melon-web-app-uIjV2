import { render, screen } from "@testing-library/react";
import NewArrivals from "./NewArrivals";

describe("NewArrivals Component", () => {
  it('renders the "new arrivals" heading', () => {
    render(<NewArrivals />);
    const heading = screen.getByRole("heading", { name: /new arrivals/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the subheading "Fashionable threads for your eyes to see"', () => {
    render(<NewArrivals />);
    const subheading = screen.getByRole("heading", {
      name: /fashionable threads for your eyes to see/i,
    });
    expect(subheading).toBeInTheDocument();
  });

  it("renders multiple product images with correct alt text", () => {
    render(<NewArrivals />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);

    images.forEach((image) => {
      expect(image).toHaveClass("img-fluid");
      expect(image).toHaveClass("m-2");
      expect(image).toHaveAttribute("src");
      expect(image).toHaveAttribute("alt");
    });
  });
});
