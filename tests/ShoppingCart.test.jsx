// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingCart from "../src/components/ShoppingCart";
import { vi } from "vitest";

describe("ShoppingCart component", () => {
  it("renders the shopping cart icon", () => {
    render(<ShoppingCart itemCount={0} />);

    // Check if the Heroicons component is rendered
    const icon = screen.getByTestId("shopping-cart");
    expect(icon).toBeInTheDocument();
    expect(icon.querySelector("svg")).toBeInTheDocument();
  });

  it("clicking the shopping cart calls onClick handler", () => {
    const handleClick = vi.fn();

    render(<ShoppingCart itemCount={5} onClick={handleClick} />);

    // Get the element by its role
    const cartButton = screen.getByRole("button");

    // Simulate a click event
    fireEvent.click(cartButton);

    // Verify the click handler was called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders a number when itemCount is greater than 0", () => {
    const { container } = render(<ShoppingCart itemCount={5} />);
    const itemCount = container.querySelector("span");
    const count = parseInt(itemCount.innerHTML);
    expect(itemCount).toBeInTheDocument();
    expect(count).toBeGreaterThan(0);
    expect(count).toBe(5);
  });

  it("does not render the item count when itemCount is 0", () => {
    const { queryByTestId } = render(<ShoppingCart itemCount={0} />);
    const itemCountElement = queryByTestId("item-count");
    expect(itemCountElement).toBeNull();
  });
});
