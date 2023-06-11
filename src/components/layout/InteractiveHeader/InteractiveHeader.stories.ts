import { Meta, StoryObj } from "@storybook/react"
import Logo from "./logo.png";

import { InteractiveHeader } from "."
import { image } from "../../../mocks/imageMock";

const meta: Meta<typeof InteractiveHeader> = {
  title: "Layout/InteractiveHeader",
  component: InteractiveHeader,
  argTypes: {
    title: { type: "string" },
    buttonLabel: { type: "string" },
    href: { type: "string" },
    logo: { type: "string" }
  }
}

export default meta;
type Story = StoryObj<typeof InteractiveHeader>;

export const interactiveHeader: Story = {
  args: {
    buttonLabel: "Acessar",
    title: "Transforme sua imaginação em arte realista!",
    href: "/catalog/type",
    image,
    logo: Logo.src
  }
}
