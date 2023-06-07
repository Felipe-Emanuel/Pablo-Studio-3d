import { render, fireEvent } from "@testing-library/react";
import { IconCirle } from ".";
import { ShareIcon } from "@/src/icons";

describe("<IconCirle />", () => {
  it("should render without erros", () => {
    const { container } = render(<IconCirle icon={<ShareIcon />} />);

    expect(container).toBeInTheDocument();
  });

  it("should render correctly with default value at 'icon' prop", () => {
    //@ts-expect-error
    const { container } = render(<IconCirle />);

    expect(container.firstChild?.textContent).toBe("");
  });

  it("should aplly correctly 'size' prop", () => {
    const { container } = render(
      <IconCirle icon={<ShareIcon />} size="large" />
    );

    const iconElement = container.firstChild;
    expect(iconElement).toHaveClass("w-12 h-12 p-3");
  });

  it("should apply correctly 'onCLick' function", () => {
    const onClickMock = jest.fn();

    const { container } = render(
      <IconCirle icon={<ShareIcon />} onClick={() => onClickMock()} />
    );

    const iconElement = container.firstChild

    if(iconElement) fireEvent.click(iconElement);

    expect(onClickMock).toHaveBeenCalled()
  });
});
