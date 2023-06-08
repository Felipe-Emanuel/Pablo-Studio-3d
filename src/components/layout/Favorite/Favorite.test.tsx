import { fireEvent, render, waitFor } from "@testing-library/react";
import { Favorite } from ".";

describe("<Favorite />", () => {
  it("should render without error", () => {
    const { container } = render(<Favorite />);

    expect(container).toBeInTheDocument();
  });

  it("should call click function", async () => {
    const { container } = render(<Favorite size="large" />);
    const favoriteIcon = container.querySelector("svg");

    favoriteIcon && fireEvent.click(favoriteIcon);
    await waitFor(() => {
      expect(favoriteIcon).toHaveClass("OutlineHeart");
    });
  });
});
