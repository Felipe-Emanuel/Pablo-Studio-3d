import { render } from "@testing-library/react";
import { OrderDetails } from ".";

const config = {
  valueOfProducts: "1500",
  freight: "15",
  total: "1515",
};

describe("<OrderDetails />", () => {
  const { freight, total, valueOfProducts } = config;

  it("should render without errors", () => {
    const { container } = render(
      <OrderDetails
        freight={freight}
        total={total}
        valueOfProducts={valueOfProducts}
      />
    );

    expect(container).toBeInTheDocument();
  });

  it("should render with default values", () => {
    //@ts-expect-error: CHAMADA SEM PROPS OBRIGATÓRIAS
    const { container } = render(<OrderDetails />);

    expect(container).toBeInTheDocument();
  });
});
