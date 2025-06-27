import { render, screen } from "@testing-library/react";
import DesktopBanner from "./DesktopBanner";

describe("Desktop Banner Component", () => {
  it('renders the "SUMMER 2025" heading', () => {
    render(<DesktopBanner />);
    // Using getByRole with 'heading' and a regex for text content (case-insensitive)

    const heading = screen.getByRole("heading", { name: /summer 2025/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the "New Collection" heading', () => {
    render(<DesktopBanner />);
    const newCollectionHeading = screen.getByRole("heading", {
      name: /new collection/i,
    });
    expect(newCollectionHeading).toBeInTheDocument();
  });

  it('renders the "shorts, tees, tanks & more!" paragraph', () => {
    render(<DesktopBanner />);
    const paragraph = screen.getByText(/shorts, tees, tanks & more!/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the "SHOP NOW" button', () => {
    render(<DesktopBanner />);
    const button = screen.getByRole("button", { name: /shop now/i });
    expect(button).toBeInTheDocument();
  });

  it("renders the banner image with the correct alt text", () => {
    render(<DesktopBanner />);
    const image = screen.getByRole("img", { name: /banner/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass("img-fluid");
    expect(image).toHaveClass("w-25");
    expect(image).toHaveAttribute("src", "./banner-1.png");
  });
});
