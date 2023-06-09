import { Title } from "../Title";

interface headerProps {
  title: string | undefined;
  titleSize?: "2xl" | "xl" | "lg";
  subtitle: string;
  subtitleSize?: "xl" | "lg";
}

export function Header({
  title = "",
  titleSize = "xl",
  subtitle = "",
  subtitleSize = "lg",
}: headerProps) {
  return (
    <div className="flex flex-col gap-0 w-full max-w-sm leading-3">
      <Title title={title} size={titleSize} className="leading-7" />
      <Title as="h2" title={subtitle} size={subtitleSize} className="text-white/75" />
    </div>
  );
}
