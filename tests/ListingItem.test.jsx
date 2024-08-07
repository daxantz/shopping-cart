import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ListingItem from "../src/components/ListingItem";
import { vi } from "vitest";

describe("Listing item component", () => {
  it("renders the listing item component with correct data", () => {
    const data = {
      category: "men's clothing",
      price: 109.05,
      title: "Cool Coat",
    };

    render(<ListingItem itemData={data} />);

    // Check if the correct content is rendered
    expect(screen.getByText(/men's clothing/i)).toHaveTextContent(
      "men's clothing"
    );
    expect(screen.getByTestId("listing-item")).toBeInTheDocument();
    expect(screen.getByText(/109.05/i)).toHaveTextContent("109.05");
    expect(screen.getByText(/Cool Coat/i)).toHaveTextContent("Cool Coat");
  });
  it("calls addToCart function", () => {
    const data = {
      category: "men's clothing",
      price: 109.05,
      title: "Cool Coat",
    };
    const mockAddToCart = vi.fn();

    render(<ListingItem itemData={data} addToCart={mockAddToCart} />);
    const btn = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(btn);
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
});
