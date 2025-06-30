import { render, screen } from "@testing-library/react";
import BestSellers from "./BestSellers";

describe("BestSellers Component", () => {
  it('renders the "best sellers" heading', () => {
    render(<BestSellers />);
    const heading = screen.getByRole("heading", { name: /best sellers/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the "The hottest trends in fashion today" subheading', () => {
    render(<BestSellers />);
    const subheading = screen.getByRole("heading", {
      name: /the hottest trends in fashion today/i,
    });
    expect(subheading).toBeInTheDocument();
  });

});
