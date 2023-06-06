import { render } from "@testing-library/react";
import { Title } from ".";

describe("<Title />", () => {
  it("should render without errors", () => {
    render(<Title title="Hello World!" />);
  });

  it('should apply "size" prop correctly', () => {
    const { container } = render(<Title title="Hello World!" size="2xl" />);

    expect(container.firstChild).toHaveClass("text-2xl");
  });

  it('should apply correctly "as" prop', () => {
    const { container } = render(<Title title="Hello World!" as="h5" />);

    expect(container.querySelector("h5")).toBeInTheDocument();
  });

  it('should render "Title" correctly', () => {
    const { getByText } = render(<Title title="Hello World!" />);

    expect(getByText("Hello World!")).toBeInTheDocument();
  });

  it('should render default component as "h1', () => {
    const { container } = render(<Title title="Hello World!" />)

    expect(container.querySelector('h1')).toBeInTheDocument()
  })
});
