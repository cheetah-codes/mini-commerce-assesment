// import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../src/components/ProductCard";
import { useCartStore } from "../src/store/cartStore";

jest.mock("../src/store/cartStore");

const mockProduct = {
  id: 1,
  slug: "test-product",
  name: "Test Product",
  price: 99.99,
  description: "Test description",
  image: "/test-image.jpg",
};

describe("ProductCard", () => {
  const mockAddItem = jest.fn();

  beforeEach(() => {
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      addItem: mockAddItem,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders product information", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(
      screen.getByText(`$${mockProduct.price.toFixed(2)}`)
    ).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.name)).toHaveAttribute(
      "src",
      mockProduct.image
    );
  });

  it("calls addItem when Add to Cart is clicked", () => {
    render(<ProductCard product={mockProduct} />);

    fireEvent.click(screen.getByText("Add to Cart"));
    expect(mockAddItem).toHaveBeenCalledWith({
      id: mockProduct.id,
      slug: mockProduct.slug,
      name: mockProduct.name,
      price: mockProduct.price,
      image: mockProduct.image,
    });
  });
});
