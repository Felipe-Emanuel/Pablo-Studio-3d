import { render } from "@testing-library/react";
import { FinancialSummary } from ".";

const config = {
  field: "Valor dos Produtos",
  price: "100",
};

describe("<FinancialSummary />", () => {
  const { field, price } = config;

  it("should render without errors", () => {
    const { container } = render(
      <FinancialSummary field={field} price={price} />
    );

    expect(container).toBeInTheDocument();
  });

  it("should render with default values", () => {
    //@ts-expect-error
    const { container } = render(<FinancialSummary />);

    expect(container).toHaveTextContent("R$ 0,00")
  });
});
