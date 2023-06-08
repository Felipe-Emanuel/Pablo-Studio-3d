import { render } from "@testing-library/react";
import { FloatCard } from ".";
import { image } from "@/src/mocks/imageMock";

describe("<FloatCard />", () => {
  it("should render without errors", () => {
    const { container } = render(<FloatCard field={image} href="/" />)

    expect(container).toBeInTheDocument()
  });

  it("should not broken if no field", () => {
    //@ts-expect-error
    const { container } = render(<FloatCard href="/" small />)

    expect(container).toBeInTheDocument()
  });

  it("should with default values", () => {
    //@ts-expect-error
    const { container } = render(<FloatCard field={image} />)

    expect(container).toBeInTheDocument()
  });

  it("should apply 'w-80 h-80' if id 'small' true ", () => {
    const { container } = render(<FloatCard field={image} small href="/" />)

    expect(container.firstChild).toHaveClass("w-80 h-80")
  });

})
