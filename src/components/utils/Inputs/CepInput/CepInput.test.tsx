import { fireEvent, render, waitFor } from "@testing-library/react";
import { CepInput } from ".";

jest.mock("lottie-react", () => ({
  useLottie: jest.fn().mockReturnValue("View")
}));

describe("<CepInput />", () => {
  const submit = jest.fn();

  it("should render without error", () => {
    const { container } = render(<CepInput submit={submit} placeholder="Cep" />)

    expect(container).toBeInTheDocument()
  });

  it("should render with default placeholder", () => {
    //@ts-expect-error
    const { container } = render(<CepInput submit={submit} />)

    expect(container).toBeInTheDocument()
  })

  it("should render correctly placeholder", () => {
    const { getByPlaceholderText } = render(<CepInput submit={submit} placeholder="Cep" />)

    expect(getByPlaceholderText("Cep")).toBeInTheDocument()
  });

  it("should call the submit function when input length is greater than or equal to 8", () => {
    const { getByPlaceholderText } = render(<CepInput submit={submit} placeholder="Cep" />)

    const inputElement = getByPlaceholderText("Cep");
    fireEvent.change(inputElement, { target: { value: '12345678' } });
    waitFor(() => {
      expect(submit).toHaveBeenCalledTimes(1);
    });
  });

  it('should display loading state when isLoading is true', async () => {
    const { getByPlaceholderText, queryByTestId } = render(
      <CepInput placeholder="Enter CEP" submit={submit} />
    );

    const inputElement = getByPlaceholderText("Enter CEP");
    fireEvent.change(inputElement, { target: { value: '12345678' } });

    await waitFor(() => {
      const loadElement = queryByTestId("input-loading");
      expect(loadElement).toBeInTheDocument();
    });
  });

  it('should clear the input value and stop loading state after 2 seconds', async () => {
    jest.useFakeTimers()

    const { getByPlaceholderText, queryByTestId } = render(<CepInput placeholder="Enter CEP" submit={submit} />);
    const inputElement = getByPlaceholderText("Enter CEP")

    fireEvent.change(inputElement, {target: { value: '123456789' } })
    await waitFor(() => {
      expect(queryByTestId("input-loading")).toBeInTheDocument()
    })

    jest.advanceTimersByTime(2000);

    await waitFor(() => {
      expect(queryByTestId("input-loading")).not.toBeInTheDocument()
      expect(inputElement).toHaveValue("")
    })
  })

});
