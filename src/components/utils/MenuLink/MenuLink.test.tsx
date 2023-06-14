import { render, fireEvent } from "@testing-library/react";
import { MenuLink } from '.'

const config = {
  label: "Home",
  href: "/"
}

jest.mock("next/navigation", () => ({
  usePathname: jest.fn().mockReturnValue("/")
}));

describe('<MenuLink />', () => {
  const { href, label } = config

  it('should render without errors', () => {
    const { getByRole } = render(<MenuLink href={href} label={label} />)

    const linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute("href", href);
    expect(linkElement).toHaveTextContent(label)
  });

  it("should render correctl when 'icon' is true", () => {
    const { getByRole } = render(<MenuLink label={label} href="/" icon />)

    const linkElement = getByRole('link');
    expect(linkElement.querySelector('svg')).toBeInTheDocument()
  });

  it("should apply a 'after:left-0' class when hovering over", () => {
    const { getByRole } = render(<MenuLink href="/" label={label} />)

    const linkElement = getByRole('link');
    fireEvent.mouseEnter(linkElement);
    expect(linkElement).toHaveClass('after:left-0')

    fireEvent.mouseLeave(linkElement);
    expect(linkElement).toHaveClass('after:right-0')
  })

  it("should apply 'border-2' and 'border-white' when pathName equal 'href'", () => {
    const { getByRole } = render(<MenuLink label={label} href={href} />)

    const linkElement = getByRole('link');
    expect(linkElement).toHaveClass("lg:border-2", "lg:border-white")
  })

  it("should apply 'border-2' and 'border-dark' when pathName equal 'href'", () => {
    const { getByRole } = render(<MenuLink label={label} href="/different" />)

    const linkElement = getByRole('link');
    expect(linkElement).toHaveClass("lg:border-2", "lg:border-dark")
  })

  it("should render without href prop", () => {
    // @ts-expect-error
    const { container } = render(<MenuLink label={label} />)

    expect(container).toBeInTheDocument();
  })

  it("should render without label prop", () => {
    // @ts-expect-error
    const { container } = render(<MenuLink href={href} />)

    expect(container).toBeInTheDocument();
  })
})
