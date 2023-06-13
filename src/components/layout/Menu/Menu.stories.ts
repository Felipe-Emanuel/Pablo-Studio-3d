import { Meta, StoryObj } from "@storybook/react";
import { Menu } from ".";

const meta: Meta<typeof Menu> = {
  title: "Layout/Menu",
  component: Menu,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const menu: Story = {
  args: {
    user: true,
  },
};
