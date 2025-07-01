import { render, screen } from "@testing-library/react";
import MobileBanner from "./MobileBanner";
import { describe } from "vitest";

describe("MobileBanner Component", () => {
  it('renders the "SUMMER 2025" heading', () => {
    render(<MobileBanner />);
    const heading = screen.getByRole("heading", { name: /summer 2025/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the "NEW COLLECTION" heading', () => {
    render(<MobileBanner />);
    const newCollectionHeading = screen.getByRole("heading", {
      name: /new collection/i,
    });
    expect(newCollectionHeading).toBeInTheDocument();
  });

  it('renders the "shorts, tees, tanks & more!" paragraph', () => {
    render(<MobileBanner />);
    const paragraph = screen.getByText(/shorts, tees, tanks & more!/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the "SHOP NOW" button', () => {
    render(<MobileBanner />);
    const button = screen.getByRole("button", { name: /shop now/i });
    expect(button).toBeInTheDocument();
  });
});
