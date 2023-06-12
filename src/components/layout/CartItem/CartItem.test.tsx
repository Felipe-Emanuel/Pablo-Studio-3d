import { fireEvent, render, waitFor } from "@testing-library/react";
import { CartItem } from ".";
import { useLocalStorage } from "@/src/data/hooks/useLocalStorage";
import { selecionedProductMock } from "@/src/mocks/selecionedProductMock";

jest.mock("@/src/data/hooks/useLocalStorage", () => ({
  useLocalStorage: jest.fn(),
}));

describe("<CartItem />", () => {
  const localStorageData = [selecionedProductMock];

  beforeEach(() => {
    //@ts-expect-error: mockReturnValue does not exist at useLocalStorage personal hook
    useLocalStorage.mockReturnValue({
      getLocalStorage: jest.fn(() => localStorageData),
      setLocalStorage: jest.fn(() => localStorageData),
    });
  });

  it("should render without error", () => {
    const { container } = render(<CartItem />);
    expect(container).toBeInTheDocument();
  });

  it("should call 'handle' functions", () => {
    const { getAllByTestId } = render(<CartItem />);

    const incrementButton = getAllByTestId("increment");
    const decrementButton = getAllByTestId("decrement");
    fireEvent.click(incrementButton[0]);
    fireEvent.click(decrementButton[0]);
  });

  it("should set initial state correctly with localStorageItem", () => {
    const localStorageItem = [
      {
        collection: "Test Collection",
        thumb: "test_thumb",
        title: "Test Product",
        uid: "test_uid",
        actualPrice: 10,
        initialPrice: 20,
        count: 1,
      },
    ];

    //@ts-expect-error: mockReturnValue does not exist at useLocalStorage personal hook
    useLocalStorage.mockReturnValue({
      getLocalStorage: jest.fn(() => localStorageItem),
    });

    const { getByText } = render(<CartItem />);

    expect(getByText("Test Product")).toBeInTheDocument();
    expect(getByText("Test Collection")).toBeInTheDocument();
  });

  it("should set initial state correctly without localStorageItem", () => {
    //@ts-expect-error: mockReturnValue does not exist at useLocalStorage personal hook
    useLocalStorage.mockReturnValue({
      getLocalStorage: jest.fn(() => null),
    });

    const { container } = render(<CartItem />);

    expect(container).toBeInTheDocument();
  });

  it("should not broken if no 'data'", () => {
    window.localStorage.clear();
    const { container } = render(<CartItem />);

    expect(container).toBeInTheDocument();
  });
});
