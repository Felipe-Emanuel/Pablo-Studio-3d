import { render, fireEvent, waitFor } from "@testing-library/react";
import { LinkIcon } from "@/src/icons";
import { Share } from ".";

const actionMock = jest.fn();

const options = [
  {
    label: "Copiar link",
    icon: <LinkIcon />,
    action: actionMock,
  }
]

describe("<Share />", () => {
  it("should render without error", () => {
    const { container } = render(<Share options={options} />)

    expect(container).toBeInTheDocument()
  });

  it("should render with default values", () => {
    //@ts-expect-error
    const { container } = render(<Share />)

    expect(container).toBeInTheDocument()
  })

  it("should change className when hover button", async () => {
    const { container } = render(<Share options={options} />)

    const element = container.firstChild
    fireEvent.mouseEnter(element!)
    await waitFor(() => {
      expect(element).toHaveClass("h-24 bg-white/80")
    })

    fireEvent.mouseLeave(element!)
    await waitFor(() => {
      expect(element).not.toHaveClass("h-24 bg-white/80")
    })
  })
})

