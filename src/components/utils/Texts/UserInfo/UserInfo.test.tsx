import { render } from "@testing-library/react";
import { UserInfo } from ".";

const config = {
  field: "city",
  info: "conselheiro cena"
}

describe("<UserInfo />", () => {
  const { field, info } = config;

  it("sould render without error", () => {
    const { container } = render(<UserInfo info={info} field={field} />);

    expect(container).toBeInTheDocument()
  });

  it("should render * for each word", () => {
    const { getByText } = render(<UserInfo info={"CPF"} field={field} isHidden />);

    const hiddenFieldText = getByText("***")

    expect(hiddenFieldText).toBeInTheDocument()
  })

  it("should render with default values", () => {
    //@ts-expect-error
    const { getByText } = render(<UserInfo />);

    const defaultValue = getByText(":")

    expect(defaultValue).toBeInTheDocument()
  })
})
