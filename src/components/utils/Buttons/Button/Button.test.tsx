import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  it("should render without error", () => {
    const { getByRole } = render(<Button label="Acessar" />);

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should render without 'variant' prop", () => {
    const { getByRole } = render(<Button label="Acessar" />);

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should render correctly 'light' variant and size 'lg'", () => {
    const { getByRole } = render(<Button labelSize="lg" label="Acessar" />);

    expect(getByRole("button")).toHaveClass(
      "bg-transparent border-2 border-white text-lg"
    );
  });

  it("should render correctly 'dark' variant and size 'sm", () => {
    const { getByRole } = render(
      <Button labelSize="sm" label="Acessar" variant="dark" />
    );

    expect(getByRole("button")).toHaveClass(
      "bg-dark rounded-md shadow-button text-sm"
    );
  });

  it("should works correctly without any props", () => {
    const { getByRole } = render(<Button />);

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should add correctly 'onClick' event", () => {
    const onClickMock = jest.fn();
    render(<Button label="Acessar" onClick={onClickMock} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should render correctly 'label' prop", () => {
    const { getByText } = render(<Button label="Acessar" />);

    expect(getByText("Acessar")).toBeInTheDocument();
  });

  it("should apply 'text-sm lg:text-xl' class if no 'labelSize' prop", () => {
    const { container } = render(<Button label="Acessar" />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="py-3 px-10 text-center transition-all duration-300 font-bold
            hover:bg-white text-white hover:text-dark
            text-text-sm lg:text-xl
            
            bg-transparent border-2 border-white"
      >
        Acessar
      </button>
    `);
  });
});
