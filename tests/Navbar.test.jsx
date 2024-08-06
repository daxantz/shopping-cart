import { render, screen } from "@testing-library/react";
import Navbar from "../src/components/Navbar";

describe("Navbar component", () => {
  it("renders the Navbar with the correct structure and content", () => {
    render(<Navbar itemCount={10} />);

    // Check if the title is rendered
    expect(screen.getByText("Dax's Shop")).toBeInTheDocument();

    // Check if navigation links are rendered
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Store")).toBeInTheDocument();

    // Check if the search input is rendered
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();

    // Check if the ShoppingCart component is rendered with the correct item count
    const shoppingCart = screen.getByTestId("shopping-cart");
    expect(shoppingCart).toBeInTheDocument();
  });
});
