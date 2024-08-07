import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ListingItem from "../src/components/ListingItem";
import { vi } from "vitest";

describe("Listing item component", () => {
  it("renders the listing item component", () => {
    const data = {
      category: "men's clothing",
      price: 109.05,
      title: "Cool Coat",
    };

    render(<ListingItem itemData={data} />);
    const listingItem = screen.getByTestId("listing-item");

    expect(listingItem).toBeInTheDocument();
  });

  it("renders the listing item component with correct data", () => {
    const data = {
      category: "men's clothing",
      price: 109.05,
      title: "Cool Coat",
    };

    render(<ListingItem itemData={data} />);
    const categoryElement = screen.getByText(/men's clothing/i);
    const priceElement = screen.getByText(/109.05/i);
    const titleElement = screen.getByText(/Cool Coat/i);

    expect(categoryElement).toBeInTheDocument();
    expect(categoryElement).toHaveTextContent("men's clothing");
    expect(priceElement).toBeInTheDocument();
    const priceInt = parseFloat(priceElement.innerHTML);
    expect(priceInt).toBe(109.05);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent("Cool Coat");
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
