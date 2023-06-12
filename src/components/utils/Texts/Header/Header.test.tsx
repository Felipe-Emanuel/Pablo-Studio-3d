import { render } from "@testing-library/react";
import { Header } from ".";

const config = {
  title: "Project Title",
  subtitle: "Collection",
};

describe("<Header />", () => {
  const { subtitle, title } = config;
  it("should render without errors", () => {
    render(
      <Header
        title={title}
        subtitle={subtitle}
        subtitleSize="lg"
        titleSize="2xl"
      />
    );
  });

  it("should render title and subtitle", () => {
    const { container } = render(<Header title={title} subtitle={subtitle} />);

    const h1 = container.querySelector(`h1`);
    const h2 = container.querySelector(`h2`);

    expect(h1?.textContent).toBe("Project Title");
    expect(h2?.textContent).toBe("Collection");
  });

  it("should render without title and subtitle", () => {
    //@ts-expect-error
    const { container } = render(<Header subtitleSize="lg" titleSize="2xl" />);

    expect(container).toBeInTheDocument();
  });

  it("should apply 'dark' mode ", () => {
    const { getByText } = render(
      <Header title={title} subtitle={subtitle} dark />
    );

    const h1 = getByText(title);

    expect(h1).toHaveClass("text-black");
  });
});
