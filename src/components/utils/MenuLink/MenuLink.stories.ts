import type { Meta, StoryObj } from "@storybook/react";

import { MenuLink } from ".";

const meta: Meta <typeof MenuLink> = {
  title: "Utils/MenuLink",
  component: MenuLink,
  argTypes: {
    href: { type: "string" },
    label: { type: "string" }
  }
}

export default meta;
type Story = StoryObj<typeof MenuLink>;

export const menuLink: Story = {
  args: {
    href: '/',
    label: 'Catálogo',
    icon: false,
  }
}
