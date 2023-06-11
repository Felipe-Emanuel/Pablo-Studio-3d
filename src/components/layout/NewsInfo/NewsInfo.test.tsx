import { render } from "@testing-library/react";
import { NewsInfo } from ".";
import { productMocked } from "@/src/mocks/productMocked";

describe('<NewsInfo />', () => {
  it("should render without errors", () => {
    // @ts-expect-error: CHAMADA COM MOCK PERSONALIZADO QUE FOGE UM POUCO DA TIPAGEM COMPLEXA ESTIPULADA
    const { container } = render(<NewsInfo product={productMocked} />);

    expect(container).toBeInTheDocument();
  });

  it("should not broken if use default 'product' value", () => {
    //@ts-expect-error: SEM ATRIBUTO OBRIGATÓRIO
    const { container } = render(<NewsInfo />);

    expect(container).toBeInTheDocument();
  })
})
