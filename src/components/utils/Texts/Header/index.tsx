import { Title } from "../Title";

interface headerProps {
  title: string | undefined;
  titleSize?: "2xl" | "xl" | "lg";
  subtitle: string;
  subtitleSize?: "xl" | "lg" | "xs";
  dark?: boolean;
}

export function Header({
  title = "",
  titleSize = "xl",
  subtitle = "",
  subtitleSize = "lg",
  dark = false,
}: headerProps) {
  return (
    <div className="flex flex-col gap-0 w-full max-w-sm ">
      <Title
        title={title}
        size={titleSize}
        className="leading-none my-1 w-full max-w-[420px]"
        dark={dark}
      />
      <Title
        as="h2"
        title={subtitle}
        size={subtitleSize}
        className={dark ? "text-dark/75" : "text-white/75"}
        dark={dark}
      />
    </div>
  );
}
