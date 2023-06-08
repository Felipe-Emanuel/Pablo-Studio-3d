import { render } from "@testing-library/react";
import { InteractiveHeader } from ".";
import { image } from "@/src/mocks/imageMock";

const config = {
  buttonLabel: "Acessar",
  title: "Transforme sua imaginação em arte realista!",
  href: "/catalog/drawings",
};

describe("<InteractiveHeader />", () => {
  const { buttonLabel, href, title } = config;

  it("should render without errors", () => {
    const { container } = render(
      <InteractiveHeader
        logo="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
        image={image}
        href={href}
        buttonLabel={buttonLabel}
        title={title}
      />
    );

    expect(container).toBeInTheDocument();
  });

  it("should render with default values", () => {
    const { container } = render(
      //@ts-expect-error
      <InteractiveHeader
        image={image}
      />
    );

    expect(container).toBeInTheDocument();
  })

  it("should not broken if no image", () => {
    const { container } = render(
      //@ts-expect-error
      <InteractiveHeader
        href={href}
        buttonLabel={buttonLabel}
        title={title}
      />
    );

    expect(container).toBeInTheDocument();
  })

  it("should render without logo", () => {
    //@ts-expect-error
    <InteractiveHeader
    image={image}
    href={href}
    buttonLabel={buttonLabel}
    title={title}
  />
  })
});
