import { render } from "@testing-library/react";
import { LoginButton } from ".";

const mockFn = {
  onClick: jest.fn(),
};

jest.mock("lottie-react", () => ({
  useLottie: jest.fn().mockReturnValue({}),
}));

describe("<LoginButton />", () => {
  it("should render without error", () => {
    const { container } = render(
      <LoginButton method="instagram" onClick={mockFn.onClick} />
    );

    expect(container).toBeInTheDocument();
  });

  it("should render with default values", () => {
    // @ts-expect-error: render without required props
    const { container } = render(<LoginButton />);

    expect(container).toBeInTheDocument();
  });

  it("should render with 'reverse' values", () => {
    const { container } = render(
      <LoginButton method="Google" reverse onClick={mockFn.onClick} />
    );

    expect(container.firstChild).toHaveClass("flex-row-reverse");
  });

  it("should render loading state", () => {
    const { container } = render(
      <LoginButton method="Google" isLoading onClick={mockFn.onClick} />
    );

    const label = container.querySelector("button");
    expect(label?.disabled).toEqual(true);
  });
});
