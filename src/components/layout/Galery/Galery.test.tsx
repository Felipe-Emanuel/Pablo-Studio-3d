import { render, fireEvent, waitFor, getByRole } from "@testing-library/react";
import { Galery } from ".";
import { images } from "@/src/mocks/imagesMock";

describe("<Galery />", () => {
  it("should render without errors", () => {
    const { container } = render(<Galery images={images} />)

    expect(container).toBeInTheDocument()
  });

  it("should not broken if has renderized with default value", () => {
    //@ts-expect-error
    const { container } = render(<Galery />)

    expect(container).toBeInTheDocument()
  });

  it("should set the current image correctly", async () => {
    const { getAllByTestId, getAllByRole } = render(<Galery images={images} />);
    const thumbnail = getAllByTestId("thumbnail")

    fireEvent.mouseEnter(thumbnail[1])
    await waitFor (() => {
      const imageElement = getAllByRole("img")

      expect(imageElement[0]).toBeInTheDocument()
    })
  });
})
