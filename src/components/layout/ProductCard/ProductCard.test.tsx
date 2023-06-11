import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { ProductCard, set } from ".";
import { productMocked } from "@/src/mocks/productMocked";

describe("<ProductCard />", () => {
  const scrollIntoView = window.HTMLElement.prototype.scrollIntoView = jest.fn();

  it("should render without error", () => {
    // @ts-expect-error: CHAMADA COM MOCK PERSONALIZADO QUE FOGE UM POUCO DA TIPAGEM COMPLEXA ESTIPULADA
    const { container } = render(<ProductCard product={productMocked} />);

    expect(container).toBeInTheDocument();
  });

  it("should nor broken if not recive 'product'", () => {
    // @ts-expect-error: CHAMADA SEM PROPRIEDADE OBRIGATÓRIA
    const { container } = render(<ProductCard />);

    expect(container).toBeInTheDocument();
  });

  it("should click on cards", async () => {
    // @ts-expect-error: CHAMADA COM MOCK PERSONALIZADO QUE FOGE UM POUCO DA TIPAGEM COMPLEXA ESTIPULADA
    const { container } = render(<ProductCard product={productMocked} />);

    if (container.firstChild) fireEvent.click(container.firstChild);
    await waitFor(() => {
      expect(container.firstChild).toHaveClass("rounded-lg");
    });
  });

  it("should set current to null and stopPropagations", async () => {
    const { container, getAllByTestId } = render(
      // @ts-expect-error: CHAMADA COM MOCK PERSONALIZADO QUE FOGE UM POUCO DA TIPAGEM COMPLEXA ESTIPULADA
      <ProductCard product={productMocked} />
    );
    const cardInfo = getAllByTestId("cardInfo");
    const favorite = getAllByTestId("favorite");

    const mockEvent = {
      setCuttentNull: jest.fn(),
      stopPropagation: jest.fn(),
    };

    if (container.firstChild) {
      fireEvent.click(container.firstChild);
      fireEvent.click(cardInfo[0], mockEvent.stopPropagation());
      fireEvent.click(favorite[0], mockEvent.stopPropagation());
    }
    if (container.firstChild) {
      fireEvent.click(container.firstChild, mockEvent.setCuttentNull());
    }

    expect(mockEvent.setCuttentNull).toHaveBeenCalled()
    expect(mockEvent.stopPropagation).toHaveBeenCalled()
  });

  it('deve chamar scrollIntoView corretamente quando ref e ref.current forem definidos', () => {
    const ref = { current: { scrollIntoView: jest.fn() } };

    act(() => {
      //@ts-ignore
      set(ref);
    });

    expect(ref.current.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      inline: 'center',
    });
  });

  it('não deve chamar scrollIntoView quando ref ou ref.current forem undefined', () => {
    const ref = { current: undefined };

    act(() => {
      //@ts-ignore
      set(ref);
    });

    expect(ref.current).toBeUndefined();
  });

});
