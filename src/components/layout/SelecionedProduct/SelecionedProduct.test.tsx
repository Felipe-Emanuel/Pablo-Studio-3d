import { render } from "@testing-library/react";
import { images } from "@/src/mocks/imagesMock";
import { SelecionedProduct } from ".";
import { selecionedProductMock } from "@/src/mocks/selecionedProductMock";

describe("<SelecionedProduct />", () => {
  it("should render without errors", () => {
    const { container } = render(
      <SelecionedProduct
        images={images}
        //@ts-expect-error complex type from Prismic
        product={selecionedProductMock}
        uid="estatua-filosofo-grego"
      />
    );

    expect(container).toBeInTheDocument();
  });

  it("should not broken if render with default", () => {
    const { container } = render(
      //@ts-expect-error chamada sem propriedades obrigatórias
      <SelecionedProduct />
    );

    expect(container).toBeInTheDocument();
  });
});
