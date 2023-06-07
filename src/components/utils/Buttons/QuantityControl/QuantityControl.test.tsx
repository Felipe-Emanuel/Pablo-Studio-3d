import { render } from "@testing-library/react";
import { QuantityControl } from ".";

const incrementMock = jest.fn();
const decrementtMock = jest.fn();

describe("<QuantityControl />", () => {
  it("should render without error", () => {
    const { container } = render(
      <QuantityControl
        qtd={0}
        decrement={decrementtMock}
        increment={incrementMock}
      />
    );

    expect(container).toBeInTheDocument();
  });

  it("should render with default 'qtd' value", () => {
    const { getByText } = render(
      //@ts-expect-error
      <QuantityControl
        decrement={decrementtMock}
        increment={incrementMock}
      />
      )


    expect(getByText("0")).toBeInTheDocument();
  })

  it("should apply 'danger' style if 'qtd' <= 0", () => {
    const { container } = render(
      <QuantityControl
        qtd={1}
        decrement={decrementtMock}
        increment={incrementMock}
      />
    )

    const buttonToApplyDanger = container.querySelector('button')
    expect(buttonToApplyDanger).not.toHaveClass("hover:text-black/25")
  })
});
