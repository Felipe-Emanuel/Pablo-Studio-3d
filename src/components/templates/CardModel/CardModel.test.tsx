import { render } from "@testing-library/react";
import { CardModel } from ".";
import { Text } from "@utils/Texts/Text";

describe("<CardModel />", () => {
  it("should render without errors", () => {
    const { container } = render(<CardModel info={<Text text="mock" />} produc={<Text text="mock" />} />)

    expect(container).toBeInTheDocument()
  });

  it("should with default values", () => {
    //@ts-expect-error
    const { container } = render(<CardModel />)

    expect(container).toBeInTheDocument()
  });
})
