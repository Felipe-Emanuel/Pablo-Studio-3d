import { render } from "@testing-library/react";
import { NewsInfoSkeleton } from "./NewsInfoSkeleton";

describe("<NewsInfoSkeleton />", () => {
  it("should render without errors", () => {
    const { container } = render(<NewsInfoSkeleton />);

    expect(container).toBeInTheDocument()
  })

  it("should apply a snapshot to ensure responsive props remain correct", () => {
    const { container } = render(<NewsInfoSkeleton />);

    expect(container).toMatchSnapshot()
  })

});
