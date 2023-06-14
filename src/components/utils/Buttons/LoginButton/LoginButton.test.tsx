import { fireEvent, render, waitFor } from "@testing-library/react";
import { LoginButton } from ".";
import { signIn } from 'next-auth/react';

jest.mock("lottie-react", () => ({
  useLottie: jest.fn().mockReturnValue({}),
}));

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

describe("<LoginButton />", () => {
  it("should render without error", () => {
    const { container } = render(
      <LoginButton method="Facebook" id="facebook" />
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
      <LoginButton method="Google" reverse id="google" />
    );

    expect(container.firstChild).toHaveClass("flex-row-reverse");
  });

  it("should render loading state", () => {
    const { container } = render(
      <LoginButton method="Google" isLoading id="google" />
    );

    const label = container.querySelector("button");
    expect(label?.disabled).toEqual(true);
  });

  it("should call signIn with the correct ID when clicked", async () => {
    const { findByText } = render(
      <LoginButton method="Google" id="google" />
    );

    const loginButton = await findByText("Continuar com o Google");
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith("google");
    });
  });
});
