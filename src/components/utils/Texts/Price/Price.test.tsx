import { render } from "@testing-library/react";
import { Price } from ".";

describe("<Price>", () => {
  it("Should render without error", () => {
    const { container } = render(<Price price="35,90" />);

    expect(container).toBeInTheDocument();
  });

  it("Should render correctly without 'price' prop defined and use default value", () => {
    //@ts-expect-error
    const { container } = render(<Price />);

    expect(container).toBeInTheDocument();
  });

  it("Should apply 'text-dark/75' if 'dark' prop has apllyied ", () => {
    const { container } = render(<Price price="10" dark />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="w-fit h-fit border-0 text-dark/75 font-bold text-lg"
        >
          R$ 10,00
        </div>
      </div>
    `);
  });

  it("should apply 'border-b-2 border-dark px-7' when 'border' is defined", () => {
    const { container } = render(<Price price="39,99" border />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="w-fit h-fit border-b-2 border-dark px-7 font-bold text-lg"
        >
          R$ 39,99
        </div>
      </div>
    `);
  });
});
