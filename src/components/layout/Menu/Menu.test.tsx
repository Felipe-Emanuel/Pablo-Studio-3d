import { fireEvent, render, waitFor } from "@testing-library/react";
import { Menu } from ".";

jest.mock("lottie-react", () => ({
  useLottie: jest.fn().mockReturnValue({
    play: jest.fn(),
    setSpeed: jest.fn(),
    setDirection: jest.fn()
  })
}));

describe("<Menu />", () => {
  it("should render without errors", () => {
    const { container } = render(<Menu user />);

    expect(container).toBeInTheDocument();
  });

  it("should render login button", () => {
    const { getByText } = render(<Menu user={false} />);

    const buttonElement = getByText("Entrar");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render account button", () => {
    const { getByText } = render(<Menu user />);

    const buttonElement = getByText("Minha conta");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should close navBar when click in any link", () => {
    const { getByText } = render(<Menu user />);

    const mockFn = {
      onClick: jest.fn(),
    }

    const buttonElement = getByText("Catálogo");
    fireEvent.click(buttonElement, mockFn.onClick);
    waitFor(() => {
      expect(mockFn.onClick).toHaveBeenCalled();
    })
  });

  it("should close navBar with 'blur' event", () => {
    const { container } = render(<Menu user />);

    const mockFn = {
      onBlur: jest.fn(),
    }

    fireEvent.blur(container.firstChild!, mockFn.onBlur);
    expect(container.firstChild).toHaveClass("bg-transparent");
  });
});
