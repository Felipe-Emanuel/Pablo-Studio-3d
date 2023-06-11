import { render } from "@testing-library/react";
import { SliderElement } from ".";
import { productMocked } from "@/src/mocks/productMocked";
import { ProductCard } from "../ProductCard";


describe("<SliderElement />", () => {
  it("should render without error", () => {
    // @ts-expect-error: CHAMADA COM MOCK PERSONALIZADO QUE FOGE UM POUCO DA TIPAGEM COMPLEXA ESTIPULADA
    const { container } = render(<SliderElement children={<ProductCard product={productMocked} />} />)

    expect(container).toBeInTheDocument()
  })

  it("should nor broken if not recive 'children'", () => {
    // @ts-expect-error: CHAMADA SEM PROPRIEDADE OBRIGATÓRIA
    const { container } = render(<SliderElement />)

    expect(container).toBeInTheDocument()
  })
});
