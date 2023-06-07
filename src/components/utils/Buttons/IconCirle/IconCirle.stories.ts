import  type { Meta, StoryObj } from "@storybook/react";

import { IconCirle } from ".";
import { ShareIcon } from "@icons/index";

const meta: Meta<typeof IconCirle> = {
  title: "Utils/Button/IconCirle",
  component: IconCirle,
  argTypes: {
    icon: { type: "symbol" },
    onClick: () => console.log("Icon clicked"),
  }
}

export default meta;
type Story = StoryObj<typeof IconCirle>;

export const iconCirle: Story = {
  args: {
    icon: ShareIcon(),
    size: "medium"
  }
}
