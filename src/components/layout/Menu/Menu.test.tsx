import { fireEvent, render, waitFor } from "@testing-library/react";
import { Menu } from ".";
import { Session } from "next-auth";
import { HamburguerAnimation } from "../../animations/Hamburguer";

jest.mock("lottie-react", () => ({
  useLottie: jest.fn().mockReturnValue({
    play: jest.fn(),
    setSpeed: jest.fn(),
    setDirection: jest.fn()
  })
}));

const sessionMock: Session = {
  expires: "123-456-789",
  user: {
    email: "email@gmail.com",
    image: "http://localhost",
    name: "user",
  }
}

describe("<Menu />", () => {
  it("should render without errors", () => {
    const { container } = render(<Menu session={sessionMock} />);

    expect(container).toBeInTheDocument();
  });

  it("should render 'Login' button", () => {
    // @ts-expect-error: CHAMADA SEM SESSION PROP OBRIGATÓRIA
    const { getByText } = render(<Menu />);

    const buttonElement = getByText("Entrar");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render 'Account' button", () => {
    const { getByText } = render(<Menu session={sessionMock} />);

    const buttonElement = getByText("Minha conta");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should close navBar when click in any link", () => {
    const { getByText } = render(<Menu session={sessionMock} />);

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
    const { container } = render(<Menu session={sessionMock} />);

    const mockFn = {
      onBlur: jest.fn(),
    }

    fireEvent.blur(container.firstChild!, mockFn.onBlur);
    expect(container.firstChild).toHaveClass("bg-transparent");
  });
});
