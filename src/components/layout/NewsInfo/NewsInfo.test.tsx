import { fireEvent, render, waitFor } from "@testing-library/react";
import { NewsInfo } from ".";
import { productMocked } from "@/src/mocks/productMocked";

const mocks = {
  setPreferences: jest.fn(),
}

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

  it("should call 'setPreferences' function", () => {
    //@ts-expect-error: CHAMADA COM MOCK PERSONALIZADO QUE FOGE UM POUCO DA TIPAGEM COMPLEXA ESTIPULADA
    const { getByRole, getByText } = render(<NewsInfo product={productMocked} />);

    const floatCardElement = getByRole("contentinfo")
    fireEvent.click(floatCardElement, mocks.setPreferences)

    waitFor(() => {
      expect(mocks.setPreferences).toHaveBeenCalled();
    })

    const buttonElement = getByText("Acessar");
    fireEvent.click(buttonElement, mocks.setPreferences)

    waitFor(() => {
      expect(mocks.setPreferences).toHaveBeenCalled();
    })

  })
})
