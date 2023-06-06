import { render } from "@testing-library/react";
import { Text } from "./index";

describe("<Text />", () => {
  it("should render without errors", () => {
    render(<Text text="Hello world!" size="sm" />);
  });

  it('renders the correct element based on the "as" prop', () => {
    const { container } = render(
      <Text text="Hello world!" size="sm" as="span" />
    );

    expect(container.querySelector("span")).toBeInTheDocument();
  });

  it("should displays correctly text", () => {
    const { getByText } = render(<Text text="Hello world!" size="sm" />);

    expect(getByText("Hello world!")).toBeInTheDocument();
  });

  it("should apply correct size class", () => {
    const { container } = render(<Text text="hello world!" size="sm" />);

    expect(container.firstChild).toHaveClass('text-sm');
  });

  it("should apply correct weigth class", () => {
    const { container } = render(<Text text="hello world!" weigth="bold" />)

    expect(container.firstChild).toHaveClass('font-bold');
  })

  it("should use 'p' like component tag", () => {
    const { container } = render(<Text text="hello world!" />)

    expect(container.querySelector('p')).toBeInTheDocument();
  })
});
